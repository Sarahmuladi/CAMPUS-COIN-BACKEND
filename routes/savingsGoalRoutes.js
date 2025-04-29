const express = require("express");
const {
  createSavingsGoal,
  getSavingsGoals,
  updateSavingsGoal,
  deleteSavingsGoal,
} = require("../controller/savingsGoalController");
const authMiddleware = require("../controller/middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createSavingsGoal);
router.get("/get", authMiddleware, getSavingsGoals);
router.put("/update/:id", authMiddleware, updateSavingsGoal);
router.delete("/delete/:id", authMiddleware, deleteSavingsGoal);

module.exports = router;