const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  verifyToken,
} = require("../controllers/authController");
const upload = require("../middleware/upload");

router.post("/signup", upload.single("profilePicture"), signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify-token", verifyToken);

module.exports = router;
