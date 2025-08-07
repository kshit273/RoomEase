const express = require("express");
const router = express.Router();
const {
  initiatePayment,
  getPaymentStatus,
  confirmPayment,
} = require("../controllers/paymentController");

router.post("/initiate", initiatePayment);
router.get("/status/:id", getPaymentStatus);
router.post("/confirm", confirmPayment);

module.exports = router;
