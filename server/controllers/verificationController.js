const PG = require("../models/pgModel");

// ✅ POST /pgs/:id/popular-verify
exports.verifyPopular = async (req, res) => {
  try {
    const pgId = req.params.id;

    const updatedPG = await PG.findByIdAndUpdate(
      pgId,
      {
        plan: "popular",
        commissionRate: 11.8,
      },
      { new: true }
    );

    if (!updatedPG) return res.status(404).json({ error: "PG not found" });

    res.json({ message: "PG verified as Popular", pg: updatedPG });
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
};

// ✅ POST /pgs/:id/premium-verify
exports.verifyPremium = async (req, res) => {
  try {
    const pgId = req.params.id;

    const updatedPG = await PG.findByIdAndUpdate(
      pgId,
      {
        plan: "premium",
        commissionRate: 28,
      },
      { new: true }
    );

    if (!updatedPG) return res.status(404).json({ error: "PG not found" });

    res.json({ message: "PG verified as Premium", pg: updatedPG });
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
};

// ✅ GET /pgs/:id/status
exports.getPGStatus = async (req, res) => {
  try {
    const pgId = req.params.id;

    const pg = await PG.findById(pgId).select("plan commissionRate");
    if (!pg) return res.status(404).json({ error: "PG not found" });

    res.json({ plan: pg.plan, commissionRate: pg.commissionRate });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch PG status" });
  }
};
