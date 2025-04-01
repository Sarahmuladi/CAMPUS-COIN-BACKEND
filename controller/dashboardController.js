const User = require("../models/user");
const Transaction = require("../models/transaction");
//const authMiddleware = require("../middleware/auth");



// Get dashboard data
exports.getDashboard = async (req, res) => {
    try {

        if (!req.userId) {
            return res.status(401).json({ error: "Unauthorized - No user ID provided" });
        }

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const transactions = await Transaction.find({ userId: req.userId }).sort({ date: -1 });

        res.json({
            balance: user.balance || 0,
            savingsGoal: user.savingsGoal || 0,
            transactions,
            notifications: [{ message: "Welcome to CampusCoin!" }],
        });
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ error: "Server error" });
    }
};
