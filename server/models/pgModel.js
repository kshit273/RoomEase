const mongoose = require("mongoose");

// Sub-schema for each Room
const roomSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
    },
    roomType: {
      type: String,
      enum: ["single", "double", "triple", "quad", "other"],
      required: true,
    },
    tenants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // tenant user
      },
    ],
    rent: { type: Number, required: true },
    furnished: { type: String, enum: ["yes", "no", "semi"], default: "no" },
    amenities: [String], // ["AC", "Attached Bathroom", "Balcony"]
    photos: [String],
    availableFrom: { type: Date, default: Date.now },
    description: { type: String },
  },
  { _id: false } // rooms don’t need their own ObjectId
);

// Main PG Schema
const pgSchema = new mongoose.Schema(
  {
    // 🔑 PG Identity
    RID: {
      type: String,
      unique: true,
      required: true,
    },

    // 📌 Basic Info
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    amenities: [String],

    // 📌 Owner
    LID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 📌 PG Details
    gender: { type: String, enum: ["boys", "girls", "coed"], required: true },
    totalRooms: { type: Number, default: 0 },
    rooms: [roomSchema], // Embed all rooms

    // 📌 Pricing/Charges
    waterCharges: { type: String }, // e.g., "Included", "₹500/month"
    electricityCharges: { type: String }, // e.g., "As per meter"
    additionalInfo: { type: String }, // Free text for extra details

    // 📌 Food
    foodAvailable: { type: Boolean, default: false },
    foodDescription: { type: String },
    menu: [String], // ["Breakfast: Paratha", "Lunch: Dal Rice"]
    selfCookingAllowed: { type: Boolean, default: false },
    tiffinServiceAvailable: { type: Boolean, default: false },

    // 📌 Rules
    rules: [String], // ["No smoking", "No loud music after 10PM"]

    // 📌 Platform Plan
    plan: {
      type: String,
      enum: ["basic", "popular", "premium"],
      default: "basic",
    },
    commissionRate: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PG", pgSchema);
