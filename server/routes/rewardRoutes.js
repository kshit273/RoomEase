const express = require("express");
const router = express.Router();
const {
  getMyRewards,
  redeemRewards,
  getRewardHistory,
} = require("../controllers/rewardController");

const auth = require("../middleware/authMiddleware");

router.get("/my", auth, getMyRewards);
router.get("/history", auth, getRewardHistory);
router.post("/redeem", auth, redeemRewards);

module.exports = router;
