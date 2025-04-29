// const mongoose = require('mongoose');

// const expenseSchema = new mongoose.Schema({
//   category: String,
//   amount: Number,
// });

// const savingsSchema = new mongoose.Schema({
//   income: Number,
//   expenses: [expenseSchema],
// });

// const Savings = mongoose.model('Savings', savingsSchema);
// module.exports = Savings;
const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema({
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  //createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Savings", savingsSchema);
