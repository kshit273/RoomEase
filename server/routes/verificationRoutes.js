const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const isOwner = require("../middleware/isOwnerMiddleware");

const {
  verifyPopular,
  verifyPremium,
  getPGStatus,
} = require("../controllers/verificationController");

// Owner only ideally (auth middleware required)
router.post("/pgs/:id/popular-verify", auth, isOwner, verifyPopular);
router.post("/pgs/:id/premium-verify", auth, isOwner, verifyPremium);

// Anyone (for displaying badge on frontend)
router.get("/pgs/:id/status", getPGStatus);

module.exports = router;
