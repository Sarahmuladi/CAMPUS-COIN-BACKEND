const mongoose = require("mongoose");


const budgetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, required: true },
  budgetAmount: { type: Number, required: true },
  spentAmount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Budget", budgetSchema);
