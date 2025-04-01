const express = require("express");
const router = express.Router();
const { createLockedSavings, completeLockedSavings } = require("../controller/lockedSavingsController");

router.post("/create", createLockedSavings);
router.post("/complete", completeLockedSavings);

module.exports = router;
