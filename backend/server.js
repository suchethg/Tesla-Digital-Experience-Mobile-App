// server.js
const express = require('express');
const stripe = require('stripe')('sk_test_51SILoGFH8LaCugCpwQiaXbyGGYxkfOrqDgTS6e8TBut8DZ3kC48yXbzTufMSWxzpUPE6UgU8fmFY72Tka046Xvg000HAtckIUA'); // Stripe secret key
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
