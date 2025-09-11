const User = require("../models/userModel");
const PG = require("../models/pgModel");
const Payment = require("../models/paymentModel");
const Wishlist = require("../models/wishlistModel");

// ✅ GET /user/me
exports.getMe = async (req, res) => {
  const user = await User.findById(req.id).select("-password");
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// ✅ PUT /user/update
exports.updateMe = async (req, res) => {
  try{const updates = req.body;
  const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
    new: true,
  });
  res.json(updatedUser);
  }catch (err) {
    res.status(500).json({ message: "Server couldnt update the ownedPGs list" });
  }
  
};

// ✅ DELETE /user/delete
exports.deleteMe = async (req, res) => {
  await User.findByIdAndDelete(req.id);
  res.json({ message: "Account deleted" });
};

// ✅ GET /user/my-pgs (for landlord)
exports.getMyPGs = async (req, res) => {
  const pgs = await PG.find({ ownerId: req.id });
  res.json(pgs);
};

// ✅ GET /user/my-payments (for tenant)
exports.getMyPayments = async (req, res) => {
  const payments = await Payment.find({ tenantId: req.id });
  res.json(payments);
};

// ✅ GET /user/wishlist (for tenant)
exports.getMyWishlist = async (req, res) => {
  const wishlist = await Wishlist.find({ userId: req.id }).populate("pgId");
  res.json(wishlist);
};

// ✅ BONUS: GET /user/tenant-payments/:pgId
exports.getTenantPayments = async (req, res) => {
  const { pgId } = req.params;

  // Only landlord of that PG should access this
  const pg = await PG.findById(pgId);
  if (!pg || pg.ownerId.toString() !== req.id) {
    return res.status(403).json({ error: "Not authorized for this PG" });
  }

  // Get payments made for this PG
  const payments = await Payment.find({ pgId }).populate(
    "tenantId",
    "fullName email"
  );
  res.json(payments);
};
