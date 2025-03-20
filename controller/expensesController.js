const Expenses = require("../models/expenses");

exports.createExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.create(req.body);
    res.status(201).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};