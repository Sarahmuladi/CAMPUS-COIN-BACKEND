const SavingsGoal = require("../models/savingsGoal");

exports.createSavingsGoal = async (req, res) => {
  try {

    if (req.body == null ){
      return 
    } 

    const savingsGoal = await SavingsGoal.create(req.body.newGoal);
    res.status(201).json(savingsGoal);
  } catch (error) {
    console.log(error)
    res.json({ error: error.message });
  }
};

exports.getSavingsGoal = async (req, res) => {
  try {
    const savingsGoal = await SavingsGoal.find();
    res.status(200).json(savingsGoal);

  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

exports.deleteSavingsGoal = async (req, res) => {
  const goalId = req.params.id; 

  try {
    // Find and delete the goal by its ID
    const deletedGoal = await SavingsGoal.findByIdAndDelete(goalId);

    // If goal is not found, send a 404 error
    if (!deletedGoal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    // If goal is successfully deleted, send a success message
    res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
    // Handle errors (e.g., database connection issues)
    console.error('Error deleting goal:', error);
    res.status(500).json({ message: 'Server error while deleting the goal' });
  }
}