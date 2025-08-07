const Wishlist = require("../models/wishlistModel");

// ✅ POST /wishlist/add
exports.addToWishlist = async (req, res) => {
  const userId = req.userId;
  const { pgId } = req.body;

  try {
    const exists = await Wishlist.findOne({ userId, pgId });
    if (exists) return res.status(400).json({ message: "Already in wishlist" });

    const newEntry = new Wishlist({ userId, pgId });
    await newEntry.save();

    res.status(201).json({ message: "Added to wishlist" });
  } catch (err) {
    res.status(500).json({ error: "Could not add to wishlist" });
  }
};

// ✅ DELETE /wishlist/remove/:pgId
exports.removeFromWishlist = async (req, res) => {
  const userId = req.userId;
  const { pgId } = req.params;

  try {
    await Wishlist.findOneAndDelete({ userId, pgId });
    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ error: "Could not remove from wishlist" });
  }
};

// ✅ GET /wishlist
exports.getWishlist = async (req, res) => {
  const userId = req.userId;

  try {
    const wishlist = await Wishlist.find({ userId }).populate("pgId");
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch wishlist" });
  }
};
