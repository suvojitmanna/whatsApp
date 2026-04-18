const express = require("express");
const statusController = require("../controllers/statusController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const multer = require("multer");

const router = express.Router();

// storage (simple)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ FIX HERE
router.post(
  "/",
  authMiddleware,
  upload.single("file"), // 🔥 THIS LINE IS IMPORTANT
  statusController.createStatus
);

router.get("/", authMiddleware, statusController.getStatuses);
router.put("/:statusId/view", authMiddleware, statusController.viewStatus);
router.delete("/:statusId", authMiddleware, statusController.deleteStatus);

module.exports = router;