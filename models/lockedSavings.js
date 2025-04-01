const mongoose = require("mongoose");

const lockedSavingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true, default: 0 },
  lockUntil: { type: Date },
  status: {type: String, enum: ["active", "released"]},
  lockDuration: { type: Number, required: true },
  lockUnit: { type: String, enum: [ "week", "month"], required: true },
}, { timestamps: true });

module.exports = mongoose.model("LockedSavings", lockedSavingsSchema);
