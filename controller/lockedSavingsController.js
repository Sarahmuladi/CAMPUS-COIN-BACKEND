// const LockedSavings = require("../models/lockedSavings");

// exports.createLockedSavings = async (req, res) => {
//   try {
//     const lockedSavings = await LockedSavings.create({...req.body, userId: req.user.id }); // Attach userId
//     res.status(201).json(lockedSavings);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.completeLockedSavings = async (req, res) => {
//   try {
//       const { lockUntil } = req.body;  

//       if (!lockUntil) {
//           return res.status(400).json({ error: "Locked until time is required" });
//       }

//       // Find savings that should be completed
//       const updatedSavings = await LockedSavings.findOneAndUpdate(
//           { lockUntil: { $lte: lockUntil }, status: "locked" }, // Find locked savings that have expired
//           { status: "completed" }, // Mark as completed
//           { new: true } // Return the updated document
//       );

//       if (!updatedSavings) {
//           return res.status(404).json({ error: "No locked savings found for completion" });
//       }

//       res.status(200).json({ message: "Savings lock completed", data: updatedSavings });
//   } catch (error) {
//       console.error("Error completing locked savings:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const LockedSavings = require("../models/lockedSavings");

// Create a new locked savings entry
exports.createLockedSavings = async (req, res) => {
  try {
    const lockedSavings = await LockedSavings.create({ ...req.body, userId: req.user.id }); // Attach userId
    res.status(201).json(lockedSavings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Complete a locked savings entry
exports.completeLockedSavings = async (req, res) => {
  const lockedSavingsId = req.body.id;

  try {
    const updatedLockedSavings = await LockedSavings.findOneAndUpdate(
      { _id: lockedSavingsId, userId: req.user.id }, // Ensure user owns the locked savings
      { status: "completed" }, // Update the status to completed
      { new: true } // Return the updated document
    );

    if (!updatedLockedSavings) {
      return res.status(404).json({ message: "Locked savings not found" });
    }

    res.status(200).json(updatedLockedSavings);
  } catch (error) {
    res.status(500).json({ message: "Server error while completing the locked savings" });
  }
};

// Get all locked savings for the logged-in user
exports.getLockedSavings = async (req, res) => {
  try {
    const lockedSavings = await LockedSavings.find({ userId: req.user.id }); // Filter by userId
    res.status(200).json(lockedSavings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
