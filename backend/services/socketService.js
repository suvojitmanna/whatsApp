const { Server } = require("socket.io");
const User = require("../models/user");
const Message = require("../models/message");

const onlineUsers = new Map();
const typingUsers = new Map();

function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
    pingTimeout: 60000,
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    let userId;

    // 🔹 USER CONNECT
    socket.on("user_connected", async (connectingUserId) => {
      try {
        userId = connectingUserId;

        onlineUsers.set(userId, socket.id);
        socket.join(userId);

        await User.findByIdAndUpdate(userId, {
          isOnline: true,
          lastSeen: new Date(),
        });

        io.emit("user_status", { userId, isOnline: true });
      } catch (error) {
        console.error("Error in user_connected:", error);
      }
    });

    // 🔹 GET USER STATUS
    socket.on("get_user_status", (requestingUserId, callback) => {
      const isOnline = onlineUsers.has(requestingUserId);

      callback({
        userId: requestingUserId,
        isOnline,
        lastSeen: isOnline ? new Date() : null,
      });
    });

    // 🔹 SEND MESSAGE
    socket.on("send_message", async (message) => {
      try {
        const receiverId = message.receiver?._id?.toString();

        if (receiverId) {
          io.to(receiverId).emit("receive_message", message);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        socket.emit("message_error", "Failed to send message");
      }
    });

    // 🔹 READ RECEIPT
    socket.on("message_read", async (messageIds, senderId) => {
      try {
        await Message.updateMany(
          { _id: { $in: messageIds } },
          { $set: { messageStatus: "read" } },
        );

        io.to(senderId).emit("message_status_update_bulk", {
          messageIds,
          messageStatus: "read",
        });
      } catch (error) {
        console.error("Error marking message as read:", error);
      }
    });

    // 🔹 TYPING START
    socket.on("typing_start", ({ conversationId, receiverId }) => {
      if (!userId || !conversationId || !receiverId) return;

      if (!typingUsers.has(userId)) typingUsers.set(userId, {});
      const userTyping = typingUsers.get(userId);

      userTyping[conversationId] = true;

      if (userTyping[`${conversationId}_timeout`]) {
        clearTimeout(userTyping[`${conversationId}_timeout`]);
      }

      userTyping[`${conversationId}_timeout`] = setTimeout(() => {
        userTyping[conversationId] = false;

        io.to(receiverId).emit("user_typing", {
          userId,
          conversationId,
          isTyping: false,
        });
      }, 3000);

      io.to(receiverId).emit("user_typing", {
        userId,
        conversationId,
        isTyping: true,
      });
    });

    // 🔹 TYPING STOP
    socket.on("typing_stop", ({ conversationId, receiverId }) => {
      if (!typingUsers.has(userId)) return;

      const userTyping = typingUsers.get(userId);

      userTyping[conversationId] = false;

      if (userTyping[`${conversationId}_timeout`]) {
        clearTimeout(userTyping[`${conversationId}_timeout`]);
        delete userTyping[`${conversationId}_timeout`];
      }

      io.to(receiverId).emit("user_typing", {
        userId,
        conversationId,
        isTyping: false,
      });
    });

    // 🔹 ADD REACTION
    socket.on("add_reaction", async ({ messageId, emoji, reactionUserId }) => {
      try {
        const message = await Message.findById(messageId);
        if (!message) return;

        const index = message.reactions.findIndex(
          (r) => r.userId.toString() === reactionUserId && r.emoji === emoji,
        );

        if (index > -1) {
          message.reactions.splice(index, 1);
        } else {
          message.reactions.push({ userId: reactionUserId, emoji });
        }

        await message.save();

        const populated = await Message.findById(messageId)
          .populate("sender", "username profilePicture")
          .populate("receiver", "username profilePicture")
          .populate("reactions.userId", "username profilePicture");

        const data = {
          messageId,
          reactions: populated.reactions,
        };

        io.to(populated.sender._id.toString()).emit("reaction_update", data);
        io.to(populated.receiver._id.toString()).emit("reaction_update", data);
      } catch (error) {
        console.error("Error adding reaction:", error);
      }
    });

    // 🔹 DISCONNECT
    socket.on("disconnect", async () => {
      if (!userId) return;

      try {
        onlineUsers.delete(userId);

        if (typingUsers.has(userId)) {
          const userTyping = typingUsers.get(userId);

          Object.keys(userTyping).forEach((key) => {
            if (key.endsWith("_timeout")) {
              clearTimeout(userTyping[key]);
            }
          });

          typingUsers.delete(userId);
        }

        await User.findByIdAndUpdate(userId, {
          isOnline: false,
          lastSeen: new Date(),
        });

        io.emit("user_status", {
          userId,
          isOnline: false,
          lastSeen: new Date(),
        });

        socket.leave(userId);
        console.log("User disconnected:", userId);
      } catch (error) {
        console.error("Error handling disconnect:", error);
      }
    });
  });

  // ✅ FIXED (outside connection)
  io.socketUserMap = onlineUsers;

  return io;
}

module.exports = { initializeSocket };
