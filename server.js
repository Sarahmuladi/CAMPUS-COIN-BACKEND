const express = require ("express");
require ('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path")

const userRoutes = require('./routes/userRoutes')
const savingsRoutes = require('./routes/savingsRoutes')
const budgetRoutes = require('./routes/budgetRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const notificationRoutes = require("./routes/notificationRoutes");
const expensesRoutes = require('./routes/expensesRoutes')




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

app.use("/api/users", userRoutes);
app.use("/api/savings", savingsRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/expenses", expensesRoutes);

app.get('/', (req, res) => {
    res.send('API is working!');
});





