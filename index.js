const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Training data
const trainingsData = [
  {
    "id": 1,
    "header": "Philippine Startup Challenge",
    "subheader": "Register for hackathon",
    "company": "DICT Region 02 - Cagayan Valley",
    "context": "For student only.",
    "description": [
      "Got an idea that can change lives, solve real problems, or even become the next big business?",
      "Gather your squad, unleash your creativity, and show the country what Cagayan Valley's best minds can do!",
      "Whether you're in Senior High, College, or Tech-Voc, this is your chance to become a PSC Champion and help bring Region 2 back to the startup map."
    ],
    "registrationDeadline": "2025-09-19",
    "submissionDeadline": "",
    "eventDate": "",
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSejiUpsDWXAzEDsfOVZ3HyR7GWxPK7nV4IRxRqQ1ZtpxpTsmw/viewform",
    "duration": "",
    "category": "Hackathon",
    "isNewlyAdded": true,
    "capacity": 0
  },
  {
    "id": 2,
    "header": "Philippine Startup Challenge",
    "subheader": "Register for hackathon",
    "company": "DICT Region 11",
    "context": "For student only.",
    "description": [
      "This leg is a mixture of different startups from Davao City and all provinces in the Davao Region.",
      "The top 5 will be determined on October 2, 2025, and they will compete on October 7, 2025, face-to-face in DICT-XI Regional Office during the Semi-Final round.",
      "The winner will advance to the Regional Pitching Competition set on October 24, 2025.",
      "This Regional Startup Competition is your road to the Philippine Startup Challenge X National Pitching Competition!"
    ],
    "registrationDeadline": "2025-10-02",
    "submissionDeadline": "",
    "eventDate": "",
    "link": "https://tinyurl.com/NewLegRegion11",
    "duration": "",
    "category": "Hackathon",
    "isNewlyAdded": true,
    "capacity": 0
  }
];

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
