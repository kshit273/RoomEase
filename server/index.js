const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const pgRoutes = require("./routes/pgRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const rewardRoutes = require("./routes/rewardRoutes");
const referralRoutes = require("./routes/referralRoutes");
const verificationRoutes = require("./routes/verificationRoutes");
// const adminRoutes = require("./routes/adminRoutes"); // for later
const userRoutes = require("./routes/userRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 🔗 All Routes
app.use("/auth", authRoutes);
app.use("/pgs", pgRoutes);
app.use("/payment", paymentRoutes);
app.use("/rewards", rewardRoutes);
app.use("/referral", referralRoutes);
app.use("/verification", verificationRoutes);
// app.use("/admin", adminRoutes); // enable later
app.use("/user", userRoutes);
app.use("/wishlist", wishlistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
