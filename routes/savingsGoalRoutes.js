const express = require("express");
const router = express.Router();
const { createSavingsGoal, getSavingsGoal, deleteSavingsGoal} = require("../controller/savingsGoalController");

router.post("/create", createSavingsGoal);
router.get("/get", getSavingsGoal);
router.delete("/delete/:id", deleteSavingsGoal)

module.exports = router;
