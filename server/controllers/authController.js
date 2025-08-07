// server/controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Referral = require("../models/referralModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { fullName, username, email, phone, password, referralCode } =
      req.body;

    // ✅ Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = await User.create({
      fullName,
      username,
      email,
      phone,
      password: hashedPassword,
      role: "tenant", // default role
    });

    // ✅ Referral logic (optional field)
    if (referralCode) {
      const referral = await Referral.findOne({ code: referralCode });

      if (referral) {
        referral.invitedUsers.push(newUser._id);
        referral.bonusEarned += 50; // You can make this dynamic later
        await referral.save();
      }
    }

    // ✅ Create JWT token
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Signup successful",
      token,
      user: {
        _id: newUser._id,
        name: newUser.fullName,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 🔐 Match password using method from userModel
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ Create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 🎉 Success
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logout = (req, res) => {
  // Usually logout is handled on frontend by deleting token
  return res.status(200).json({ message: "Logged out successfully" });
};

exports.verifyToken = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ valid: true, user: decoded });
  } catch (error) {
    return res.status(401).json({ valid: false, message: "Invalid token" });
  }
};
