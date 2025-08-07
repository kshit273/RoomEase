const Payment = require("../models/paymentModel");

// POST /payment/initiate
exports.initiatePayment = async (req, res) => {
  const { tenantId, pgId, amount } = req.body;
  try {
    const payment = new Payment({ tenantId, pgId, amount });
    await payment.save();
    res.status(201).json({ message: "Payment initiated", payment });
  } catch (err) {
    res.status(500).json({ error: "Failed to initiate payment" });
  }
};

// GET /payment/status/:id
exports.getPaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ error: "Payment not found" });
    res.json({ status: payment.status });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch payment status" });
  }
};

// POST /payment/confirm
exports.confirmPayment = async (req, res) => {
  const { paymentId, status } = req.body;
  try {
    const updated = await Payment.findOneAndUpdate(
      { paymentId },
      { status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Payment not found" });
    res.json({ message: "Payment confirmed", updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to confirm payment" });
  }
};
