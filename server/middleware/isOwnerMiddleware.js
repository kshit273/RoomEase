const PG = require("../models/pgModel");

const isOwner = async (req, res, next) => {
  const pgId = req.params.id;
  const userId = req.userId;

  try {
    const pg = await PG.findById(pgId);

    if (!pg) {
      return res.status(404).json({ error: "PG not found" });
    }

    if (pg.ownerId.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized: Not the PG owner" });
    }

    next();
  } catch (err) {
    console.error("Owner Check Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = isOwner;
