const express = require("express");
const router = express.Router();
//const { createSavings } = require("../controller/savingsController");
const savingsController = require('../controller/savingsController');

//router.post("/create", createSavings);
router.post('/add', savingsController.addIncomeAndExpenses);
router.get('/get', savingsController.getIncomeAndExpenses);

module.exports = router;
