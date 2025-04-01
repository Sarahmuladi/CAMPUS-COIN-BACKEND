const express = require ("express");
require ('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path")

const authRoutes = require('./routes/authRoutes')
const savingsRoutes = require('./routes/savingsRoutes')
const budgetRoutes = require('./routes/budgetRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const notificationRoutes = require("./routes/notificationRoutes");
const expensesRoutes = require('./routes/expensesRoutes')
const savingsGoalRoutes = require('./routes/savingsGoalRoutes')
const lockedSavingsRoutes = require('./routes/lockedSavingsRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
//const validateRoutes = require('./routes/validateRoutes')
const refreshRoutes = require('./routes/authRoutes')




const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT} and DB is connected`)

        
        
    });
})

.catch((error) => {
console.error(error)
})

app.use("/api/auth", authRoutes);
app.use("/api/savings", savingsRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/expenses", expensesRoutes);
app.use("/api/savingsGoal", savingsGoalRoutes);
app.use("/api/lockedSavings", lockedSavingsRoutes);
app.use("/api/dashboard", dashboardRoutes);
//app.use("/api/validate", validateRoutes);
app.use("/api/refresh", authRoutes);

app.get('/', (req, res) => {
    res.send('API is working!');
});





