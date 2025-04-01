const Transaction = require("../models/transaction");

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.depositTransaction = async (req, res) => {
  const { amount, phone, service } = req.body;

  try {
      const response = await axios.post('https://api.flutterwave.com/v3/charges?type=mobile_money', {
          tx_ref: `tx-${Date.now()}`,
          amount,
          currency: 'TZS',
          payment_type: service.toLowerCase().replace(" ", "_"),
          redirect_url: 'https://yourfrontend.com/success',
          phone_number: phone,
          email: 'user@example.com',  
      }, {
          headers: { Authorization: `Bearer ${FLW_SECRET_KEY}` }
      });

      res.json({ success: true, message: "Deposit initiated!", data: response.data });
  } catch (error) {
      res.status(500).json({ success: false, message: "Deposit failed!", error: error.response?.data });
  }
}

exports.withdrawTransaction = async (req, res) => {
  const { amount, phone, service } = req.body;

  try {
      const response = await axios.post('https://api.flutterwave.com/v3/transfers', {
          account_bank: service.toLowerCase().replace(" ", "_"),
          account_number: phone,
          amount,
          currency: "TZS",
          narration: "Withdrawal via Flutterwave",
          reference: `withdraw-${Date.now()}`,
      }, {
          headers: { Authorization: `Bearer ${FLW_SECRET_KEY}` }
      });

      res.json({ success: true, message: "Withdrawal successful!", data: response.data });
  } catch (error) {
      res.status(500).json({ success: false, message: "Withdrawal failed!", error: error.response?.data });
  }
}


