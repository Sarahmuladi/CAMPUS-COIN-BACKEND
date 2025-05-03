const Budget = require("../models/budget");

// Create a new budget
exports.createBudget = async (req, res) => {
  try {
    const budget = await Budget.create({ ...req.body, userId: req.user._id }); // Attach userId
    res.status(201).json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all budgets for the logged-in user
exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ userId: req.user._id }); // Filter by userId
    res.status(200).json(budgets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a specific budget
exports.updateBudget = async (req, res) => {
  const budgetId = req.params.id;

  try {
    const updatedBudget = await Budget.findOneAndUpdate(
      { _id: budgetId, userId: req.user._id }, // Ensure user owns the budget
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedBudget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(500).json({ message: "Server error while updating the budget" });
  }
};

// Delete a specific budget
exports.deleteBudget = async (req, res) => {
  const budgetId = req.params.id;

  try {
    const deletedBudget = await Budget.findOneAndDelete({ _id: budgetId, userId: req.user._id }); // Ensure user owns the budget

    if (!deletedBudget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json({ message: "Budget deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error while deleting the budget" });
  }
};