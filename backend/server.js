const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const dbURI = 'mongodb+srv://Manish026636:manish1728@cluster0.fotxcbf.mongodb.net/revolut';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Create a Mongoose model for the 'transactions' collection
const Transaction = mongoose.model('Transaction', {
  date: String,
  volume: String,
  deepakVolume: String,
  manishVolume: String,
  euroPrice: String,
  euroAdded: String,
  addingFees: String,
  totalEuroWithFees: String,
  usdtBuyingPrice:String,
  usdtPurchased: String,
  usdtSellingPrice: String,
  profitEarned: String,
  profitDivision: String,
  profitSentToDeepak: String,
  profitSentToManish: String,
  profitSentToHarsh: String,
  // Define other fields as needed
});

// API endpoints
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
});

app.post('/api/transactions', async (req, res) => {
  const transactionData = req.body;
  try {
    const transaction = new Transaction(transactionData);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
