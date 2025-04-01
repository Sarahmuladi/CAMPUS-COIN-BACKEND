const express = require("express")
const router = express.Router();
const {refreshToken  } = require("../controller/authController");


router.post("/create", refreshToken);



module.exports = router;