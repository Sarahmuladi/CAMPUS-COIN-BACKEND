const express = require("express")
router = express.Router();
const { getDashboard } = require("../controller/dashboardController");
const authMiddleware = require("../controller/middleware/authMiddleware");



router.get("/get", authMiddleware, getDashboard);



module.exports = router;