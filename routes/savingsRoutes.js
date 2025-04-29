const express = require("express");
const {
  addIncomeAndExpenses,
  getIncomeAndExpenses,
} = require("../controller/savingsController");
const authMiddleware = require("../controller/middleware/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addIncomeAndExpenses);
router.get("/get", authMiddleware, getIncomeAndExpenses);

module.exports = router;