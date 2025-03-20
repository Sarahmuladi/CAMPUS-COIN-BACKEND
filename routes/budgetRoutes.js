const express = require("express");

const router = express.Router();

const { createBudget } = require("../controller/budgetController");

router.post("/create", createBudget);

module.exports = router;
