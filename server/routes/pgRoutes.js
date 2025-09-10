const express = require("express");
const router = express.Router();
const {
  getAllPGs,
  getPGById,
  createPG,
  updatePG,
  deletePG,
} = require("../controllers/pgController");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getAllPGs);
router.get("/:id", getPGById);
router.post("/", upload.any(), authMiddleware, createPG);
router.put("/:id", updatePG);
router.delete("/:id", deletePG);

module.exports = router;
