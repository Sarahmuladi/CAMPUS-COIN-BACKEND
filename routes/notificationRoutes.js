const express = require("express");
const router = express.Router();
const {getNotification} = require("../controller/notificationController");

router.get("/:userId", getNotification);

module.exports = router;
