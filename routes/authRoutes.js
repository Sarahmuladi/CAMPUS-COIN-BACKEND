const express = require("express");
const router = express.Router();
const { signUp, signIn, refresh } = require("../controller/authController");
const path = require("path");

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/refresh", refresh);

module.exports = router;
