const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },

    // role-based access: tenant, owner, admin
    role: {
      type: String,
      enum: ["tenant", "owner", "admin"],
      default: "tenant",
    },

    // For PG owners — they can create PG listings
    ownedPGs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PG",
      },
    ],

    // For tenants — which PG they live in (optional)
    currentPG: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PG",
    },

    // Optional — rewards balance
    rewardPoints: {
      type: Number,
      default: 0,
    },

    // Optional — RTRS score
    rtrsScore: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// 🔐 Middleware: hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔐 Method to compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
