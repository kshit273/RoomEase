const Referral = require("../models/referralModel");
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

// ✅ POST /referral/send
exports.sendReferral = async (req, res) => {
  const userId = req.userId;

  try {
    let existing = await Referral.findOne({ userId });

    if (existing) return res.json({ code: existing.code });

    const code = uuidv4().slice(0, 8); // 8-char referral code

    const newReferral = new Referral({ userId, code });
    await newReferral.save();

    res.json({ message: "Referral created", code });
  } catch (err) {
    res.status(500).json({ error: "Could not create referral" });
  }
};

// ✅ GET /referral/track/:code
exports.trackReferral = async (req, res) => {
  const { code } = req.params;

  try {
    const referral = await Referral.findOne({ code }).populate(
      "userId",
      "fullName"
    );
    if (!referral) return res.status(404).json({ error: "Code not found" });

    res.json({
      inviterName: referral.userId.fullName,
      invitedCount: referral.invitedUsers.length,
    });
  } catch (err) {
    res.status(500).json({ error: "Tracking failed" });
  }
};

// ✅ GET /referral/bonus
exports.getBonus = async (req, res) => {
  const userId = req.userId;

  try {
    const referral = await Referral.findOne({ userId });
    if (!referral) return res.status(404).json({ bonus: 0 });

    res.json({ bonus: referral.bonusEarned, redeemed: referral.bonusRedeemed });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch bonus" });
  }
};

// ✅ POST /referral/redeem
exports.redeemReferralBonus = async (req, res) => {
  const userId = req.userId;

  try {
    const referral = await Referral.findOne({ userId });
    if (!referral || referral.bonusRedeemed || referral.bonusEarned === 0) {
      return res.status(400).json({ error: "Nothing to redeem" });
    }

    // Redeem to reward system here if you want

    referral.bonusRedeemed = true;
    await referral.save();

    res.json({ message: "Bonus redeemed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Redemption failed" });
  }
};
