const express = require("express");
const router = express.Router();
const {getNotification} = require("../controller/notificationController");
//const Notification = require("../models/Notification");

router.get("/:userId", getNotification);

module.exports = router;
