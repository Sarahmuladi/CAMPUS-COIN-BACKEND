const Notification = require("../models/notification");

exports.getNotification = async (req, res) => {
    try {
      const { userId } = req.params;
      const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
  
      res.status(200).json(notifications);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch notifications" });
    }
  }
