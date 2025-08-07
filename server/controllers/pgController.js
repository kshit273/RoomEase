const PG = require("../models/pgModel");

// GET all PGs
exports.getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find();
    res.json(pgs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch PGs" });
  }
};

// GET PG by ID
exports.getPGById = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id);
    if (!pg) return res.status(404).json({ error: "PG not found" });
    res.json(pg);
  } catch (err) {
    res.status(500).json({ error: "Error getting PG" });
  }
};

// POST new PG
exports.createPG = async (req, res) => {
  try {
    const newPG = new PG(req.body);
    await newPG.save();
    res.status(201).json(newPG);
  } catch (err) {
    res.status(400).json({ error: "Failed to create PG" });
  }
};

// PUT update PG
exports.updatePG = async (req, res) => {
  try {
    const updated = await PG.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update PG" });
  }
};

// DELETE PG
exports.deletePG = async (req, res) => {
  try {
    await PG.findByIdAndDelete(req.params.id);
    res.json({ message: "PG deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete PG" });
  }
};
