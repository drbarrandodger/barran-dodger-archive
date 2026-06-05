require('dotenv').config();
const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const stripe = process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY.includes('PLACEHOLDER')
  ? require('stripe')(process.env.STRIPE_SECRET_KEY)
  : null;

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Create a Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe is not configured on the server yet.' });
  }

  const { type, email, tier, docId, title } = req.body;
  let line_items = [];
  let metadata = { type, email };

  if (type === 'membership') {
    const prices = {
      'Bronze': 1500,
      'Silver': 5000,
      'Gold': 10000
    };

    line_items = [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: `Justice Membership - ${tier}`,
          description: `Tiered support for the Barran Dodger Justice Portal`,
        },
        unit_amount: prices[tier],
        recurring: { interval: 'month' },
      },
      quantity: 1,
    }];
    metadata.tier = tier;
  } else if (type === 'dossier') {
    line_items = [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: `AI Forensic Dossier - ${title || 'Custom'}`,
          description: `Synthesis report for document/agency: ${title || docId}`,
        },
        unit_amount: 4900,
      },
      quantity: 1,
    }];
    metadata.docId = docId;
    metadata.title = title;
  } else if (type === 'burst') {
    line_items = [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: `Automated Advocacy Burst - ${title}`,
          description: `Truth Package transmission: ${title}`,
        },
        unit_amount: 2500,
      },
      quantity: 1,
    }];
    metadata.packageId = docId;
    metadata.packageName = title;
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: type === 'membership' ? 'subscription' : 'payment',
      customer_email: email,
      success_url: `${req.headers.origin}/?payment=success&type=${type}`,
      cancel_url: `${req.headers.origin}/?payment=cancel`,
      metadata,
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/bursts', (req, res) => {
  const { id, packageId, packageName, email } = req.body;
  const sql = `INSERT INTO advocacy_bursts (id, package_id, package_name, user_email, status) VALUES ('${id}', '${packageId}', '${packageName.replace(/'/g, "''")}', '${email}', 'transmitted')`;
  console.log(`Executing SQL: ${sql}`);
  exec(`team-db "${sql}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: 'Failed to record advocacy burst' });
    }
    res.json({ success: true });
  });
});

app.post('/api/dossiers', (req, res) => {
  const { id, title, email } = req.body;
  const sql = `INSERT INTO dossiers (id, title, requestor_email, status) VALUES ('${id}', '${title.replace(/'/g, "''")}', '${email}', 'pending')`;
  console.log(`Executing SQL: ${sql}`);
  exec(`team-db "${sql}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: 'Failed to save to database' });
    }
    console.log(`stdout: ${stdout}`);
    res.json({ success: true, result: JSON.parse(stdout) });
  });
});

app.get('/api/documents', (req, res) => {
  const sql = `SELECT * FROM documents`;
  exec(`team-db "${sql}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: 'Failed to fetch documents' });
    }
    try {
      res.json(JSON.parse(stdout));
    } catch (e) {
      res.status(500).json({ error: 'Failed to parse database output' });
    }
  });
});

app.post('/api/memberships', (req, res) => {
  const { id, name, email, tier } = req.body;
  const sql = `INSERT INTO memberships (id, user_name, user_email, tier, status) VALUES ('${id}', '${name.replace(/'/g, "''")}', '${email}', '${tier}', 'active')`;
  console.log(`Executing SQL: ${sql}`);
  exec(`team-db "${sql}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: 'Failed to save membership' });
    }
    res.json({ success: true });
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
