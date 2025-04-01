const Savings = require('../models/Savings');

// Add income and expenses
exports.addIncomeAndExpenses = async (req, res) => {
  try {
    const { income, expenses } = req.body;
    const savings = new Savings({
      income,
      expenses,
    });

    await savings.save();
    res.status(201).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
};

// Get income and expenses
exports.getIncomeAndExpenses = async (req, res) => {
  try {
    const savings = await Savings.find();
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};
