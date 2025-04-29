const express = require("express");
const {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
} = require("../controller/budgetController");
const authMiddleware = require("../controller/middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createBudget);
router.get("/", authMiddleware, getBudgets);
router.put("/:id", authMiddleware, updateBudget);
router.delete("/:id", authMiddleware, deleteBudget);

module.exports = router;