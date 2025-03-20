const Savings = require("../models/savings");

exports.createSavings = async (req, res) => {
  try {
    const savings = await Savings.create(req.body);
    res.status(201).json(savings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
