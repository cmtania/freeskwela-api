const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Training data
const trainingsData = require('./trainingsData');

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Freeskwela API is running!',
    endpoints: {
      trainings: '/trainings'
    }
  });
});

app.get('/trainings', (req, res) => {
  res.json(trainingsData);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server (for local development)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Access the API at: http://localhost:${port}`);
    console.log(`Trainings endpoint: http://localhost:${port}/trainings`);
  });
}

module.exports = app;
