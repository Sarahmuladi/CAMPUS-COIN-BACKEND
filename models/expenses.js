const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: false},
  category: { type: String, required: true},
  paymentMethod: { type: String, enum: ["M-Pesa", "Mixx by Yas", "Airtel Money", "Halo Pesa"], required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" }
  
}, { timestamps: true });

module.exports = mongoose.model("Expenses", expensesSchema);