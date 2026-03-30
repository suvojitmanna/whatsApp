const express = require("express");
const statusController = require("../controllers/statusController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", authMiddleware, statusController.createStatus);
router.get("/", authMiddleware, statusController.getStatuses);

router.put("/:statusId/view", authMiddleware, statusController.viewStatus);
router.delete("/:statusId", authMiddleware, statusController.deleteStatus);

module.exports = router;