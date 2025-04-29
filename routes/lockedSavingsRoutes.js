const express = require("express");
const router = express.Router();
const {
  createLockedSavings,
  completeLockedSavings,
  getLockedSavings,
} = require("../controller/lockedSavingsController");
const authMiddleware = require("../controller/middleware/authMiddleware");

// Protect routes with authMiddleware
router.post("/create", authMiddleware, createLockedSavings);
router.post("/complete", authMiddleware, completeLockedSavings);
router.get("/", authMiddleware, getLockedSavings); // Add a route to fetch locked savings

module.exports = router;