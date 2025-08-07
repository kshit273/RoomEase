const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    location: String,
    rent: Number,
    gender: String, // "boys", "girls", "coed"
    amenities: [String],
    photos: [String],
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // if needed later
    plan: {
      type: String,
      enum: ["basic", "popular", "premium"],
      default: "basic",
    },
    commissionRate: {
      type: Number,
      default: 0,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PG", pgSchema);
