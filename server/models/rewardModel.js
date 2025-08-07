const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  balance: { type: Number, default: 0 },
  history: [
    {
      type: {
        type: String, // "earned" or "redeemed"
        enum: ["earned", "redeemed"],
      },
      amount: Number,
      source: String, // e.g. "PG Rent", "Referral", "Redemption"
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Reward", rewardSchema);
