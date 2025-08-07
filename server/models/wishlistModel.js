const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PG",
    required: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

wishlistSchema.index({ userId: 1, pgId: 1 }, { unique: true }); // Prevent duplicates

module.exports = mongoose.model("Wishlist", wishlistSchema);
