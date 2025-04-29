const express = require("express");
const router = express.Router();
const { createExpenses, getExpenses, deleteExpenses } = require("../controller/expensesController");
const authMiddleware = require("../controller/middleware/authMiddleware");

router.post("/create", authMiddleware, createExpenses);
router.get("/get", authMiddleware, getExpenses);
router.delete("/delete/:id", authMiddleware, deleteExpenses);


module.exports = router;