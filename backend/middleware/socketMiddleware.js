const jwt = require("jsonwebtoken");

const socketMiddleware = (socket, next) => {
  const token =
    socket.handshake.auth?.token ||
    socket.handshake.headers?.authorization?.split(" ")[1];

  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    console.log(socket.user);
    next();
  } catch (error) {
    return next(new Error("Invalid or expired token"));
  }
};

module.exports = socketMiddleware;
