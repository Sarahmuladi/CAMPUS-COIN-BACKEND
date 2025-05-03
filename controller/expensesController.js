// const Expenses = require("../models/expenses");

// exports.createExpenses = async (req, res) => {
//   try {
//     const expenses = await Expenses.create(req.body);
//     res.status(201).json(expenses);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.getExpenses = async (req, res) => {
//   try {
//     const expenses = await Expenses.find();
//     res.status(200).json(expenses);

//   } catch(error) {
//     res.status(400).json({ error: error.message });
//   }
// }

// exports.deleteExpenses = async (req, res) => {
//   const expensesId = req.params.id; 


//   if (expensesId == null){
//     console.debug('The Expenses id is not present');
//     return
//   }

//   try {
//     // Find and delete the goal by its ID
//     const deletedExpenses = await Expenses.findByIdAndDelete(expensesId);

//     // If expenses is not found, send a 404 error
//     if (!deletedExpenses) {
//       return res.status(404).json({ message: 'Expenses not found' });
//     }

//     // If expenses is successfully deleted, send a success message
//     res.status(200).json({ message: 'Expenses deleted successfully' });
//   } catch (error) {
//     // Handle errors (e.g., database connection issues)
//     console.error('Error deleting expenses:', error);
//     res.status(500).json({ message: 'Server error while deleting the expenses' });
//   }
// }
const Expenses = require("../models/expenses");

exports.createExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.create({ ...req.body, userId: req.user._id }); // Attach userId
    res.status(201).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.find({ userId: req.user._id }); // Filter by userId
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteExpenses = async (req, res) => {
  const expensesId = req.params._id;

  try {
    const deletedExpenses = await Expenses.findOneAndDelete({ _id: expensesId, userId: req.user._id }); // Ensure user owns the expense

    if (!deletedExpenses) {
      return res.status(404).json({ message: "Expenses not found" });
    }

    res.status(200).json({ message: "Expenses deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error while deleting the expenses" });
  }
};