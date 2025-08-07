const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/checkRole");

const {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} = require("../controllers/wishlistController");

router.post("/add", auth, checkRole(["tenant"]), addToWishlist);
router.delete("/remove/:pgId", auth, checkRole(["tenant"]), removeFromWishlist);
router.get("/", auth, checkRole(["tenant"]), getWishlist);

module.exports = router;
