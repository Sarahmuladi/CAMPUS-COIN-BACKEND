const mongoose = require("mongoose");

const savingsGoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  goalName: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  //status: { type: String, enum: ["in_progress", "completed", "failed"], default: "in_progress" },
  goalDeadline: { type: Date, required: true},
}, { timestamps: true });

module.exports = mongoose.model("SavingsGoal", savingsGoalSchema);
