const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  provider: { type: String, enum: ["M-Pesa", "Mixx by Yas", "Airtel Money", "Halo Pesa"], required: true },
  type: { type: String, enum: ["deposit", "withdraw"], required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  transactionId: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
