// server/controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Referral = require("../models/referralModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      dob,
      gender,
      phone,
      password,
      referralCode,
    } = req.body;

    const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

    // ✅ Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // ✅ Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      dob,
      gender,
      phone,
      password,
      role: "tenant", // default role
      profilePicture,
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

    res.cookie("token", token, {
      httpOnly: true, // prevents JS access
      secure: process.env.NODE_ENV === "production", // only https in production
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        _id: newUser._id,
        name: newUser.fullName,
        role: newUser.role,
        profilePicture: newUser.profilePicture,
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
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 🎉 Success
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true, // prevents JS access
    secure: process.env.NODE_ENV === "production", // only https in production
    sameSite: "strict", // CSRF protection
  });
  return res.status(200).json({ message: "Logged out successfully" });
};

exports.verifyToken = (req, res) => {
  const token = req.cookies.token; // 👈 read cookie
  if (!token)
    return res.status(401).json({ valid: false, message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ valid: true, user: decoded });
  } catch (error) {
    return res.status(401).json({ valid: false, message: "Invalid token" });
  }
};
