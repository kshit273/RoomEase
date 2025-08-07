const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  sendReferral,
  trackReferral,
  getBonus,
  redeemReferralBonus,
} = require("../controllers/referralController");

router.post("/send", auth, sendReferral);
router.get("/track/:code", trackReferral); // public
router.get("/bonus", auth, getBonus);
router.post("/redeem", auth, redeemReferralBonus);

module.exports = router;
