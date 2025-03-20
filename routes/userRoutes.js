const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/userController");
const path = require("path");

router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
