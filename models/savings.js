const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  category: String,
  amount: Number,
});

const savingsSchema = new mongoose.Schema({
  income: Number,
  expenses: [expenseSchema],
});

const Savings = mongoose.model('Savings', savingsSchema);
module.exports = Savings;
