const express = require("express");
const router = express.Router();
const { createSavings } = require("../controller/savingsController");

router.post("/create", createSavings);

module.exports = router;
