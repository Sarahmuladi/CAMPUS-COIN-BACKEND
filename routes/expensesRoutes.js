const express = require("express")
const router = express.Router();
const { createExpenses, getExpenses, deleteExpenses } = require("../controller/expensesController");


router.post("/create", createExpenses);
router.get("/get", getExpenses);
router.delete("/delete/:id", deleteExpenses);


module.exports = router;