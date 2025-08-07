const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    code: {
      type: String,
      unique: true,
    },
    invitedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    bonusEarned: {
      type: Number,
      default: 0,
    },
    bonusRedeemed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Referral", referralSchema);
