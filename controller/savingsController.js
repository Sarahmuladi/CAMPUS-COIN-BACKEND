const Savings = require('../models/savings');

// Add income and expenses
exports.addIncomeAndExpenses = async (req, res) => {
  try {
    const { income, expenses } = req.body;

    // Create a new savings entry and associate it with the logged-in user
    const savings = new Savings({
      income,
      expenses,
      userId: req.user.id, // Attach userId
    });

    await savings.save();
    res.status(201).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
};

// Get income and expenses for the logged-in user
exports.getIncomeAndExpenses = async (req, res) => {
  try {
    // Fetch savings data only for the logged-in user
    const savings = await Savings.find({ userId: req.user.id }); // Filter by userId
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};