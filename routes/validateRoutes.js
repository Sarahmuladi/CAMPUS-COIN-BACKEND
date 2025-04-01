const express = require("express")
const router = express.Router();
const { validateToken } = require("../controller/authController");



router.get("/get", validateToken);



module.exports = router;