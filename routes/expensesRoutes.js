const express = require("express")
const router = express.Router();
const { createExpenses } = require("../controller/expensesController");


router.post("/create", createExpenses);

module.exports = router;