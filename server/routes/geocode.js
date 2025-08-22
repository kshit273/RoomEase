// routes/geocode.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Missing latitude or longitude" });
  }

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          latlng: `${lat},${lng}`,
          key: process.env.GOOGLE_MAPS_API_KEY, // 🔑 store key in .env
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Google Geocode API failed", error.message);
    res.status(500).json({ error: "Failed to fetch geocode" });
  }
});

module.exports = router;
