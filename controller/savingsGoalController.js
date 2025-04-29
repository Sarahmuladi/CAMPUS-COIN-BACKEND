const SavingsGoal = require("../models/savingsGoal");

// Create a new savings goal
exports.createSavingsGoal = async (req, res) => {
  try {
    const savingsGoal = await SavingsGoal.create({ ...req.body, userId: req.user.id }); // Attach userId
    res.status(201).json(savingsGoal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all savings goals for the logged-in user
exports.getSavingsGoals = async (req, res) => {
  try {
    const savingsGoals = await SavingsGoal.find({ userId: req.user.id }); // Filter by userId
    res.status(200).json(savingsGoals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a specific savings goal
exports.updateSavingsGoal = async (req, res) => {
  const goalId = req.params.id;

  try {
    const updatedGoal = await SavingsGoal.findOneAndUpdate(
      { _id: goalId, userId: req.user.id }, // Ensure user owns the goal
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedGoal) {
      return res.status(404).json({ message: "Savings goal not found" });
    }

    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: "Server error while updating the savings goal" });
  }
};

// Delete a specific savings goal
exports.deleteSavingsGoal = async (req, res) => {
  const goalId = req.params.id;

  try {
    const deletedGoal = await SavingsGoal.findOneAndDelete({ _id: goalId, userId: req.user.id }); // Ensure user owns the goal

    if (!deletedGoal) {
      return res.status(404).json({ message: "Savings goal not found" });
    }

    res.status(200).json({ message: "Savings goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error while deleting the savings goal" });
  }
};