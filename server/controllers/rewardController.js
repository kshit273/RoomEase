const Reward = require("../models/rewardModel");

// ✅ GET /rewards/my
exports.getMyRewards = async (req, res) => {
  try {
    const userId = req.userId; // from JWT
    const reward = await Reward.findOne({ userId });
    if (!reward) return res.status(404).json({ balance: 0 });
    res.json({ balance: reward.balance });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch rewards" });
  }
};

// ✅ GET /rewards/history
exports.getRewardHistory = async (req, res) => {
  try {
    const userId = req.userId;
    const reward = await Reward.findOne({ userId });
    if (!reward) return res.status(404).json({ history: [] });
    res.json({ history: reward.history });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reward history" });
  }
};

// ✅ POST /rewards/redeem
exports.redeemRewards = async (req, res) => {
  try {
    const userId = req.userId;
    const { amount } = req.body;

    const reward = await Reward.findOne({ userId });
    if (!reward || reward.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    reward.balance -= amount;
    reward.history.push({
      type: "redeemed",
      amount,
      source: "Redeemed by user",
      date: new Date(),
    });

    await reward.save();

    res.json({ message: "Redeemed successfully", balance: reward.balance });
  } catch (err) {
    res.status(500).json({ error: "Failed to redeem rewards" });
  }
};
