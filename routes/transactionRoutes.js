const express = require("express");
const router = express.Router();
const { createTransaction, depositTransaction, withdrawTransaction } = require("../controller/transactionController");

router.post("/create", createTransaction);
router.post("/deposit", depositTransaction);
router.post("/withdraw", withdrawTransaction);


module.exports = router;
