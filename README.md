# Freeskwela API

A Node.js API for training and event data, designed for deployment on Vercel.

## Endpoints

- `GET /` - API information and available endpoints
- `GET /trainings` - Returns all training data
- `GET /health` - Health check endpoint

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. The API will be available at `http://localhost:3000`

## Deployment on Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy your application.

## API Response Example

### GET /trainings

Returns an array of training objects:

```json
[
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
  }
]
```

## Environment Variables

No environment variables are required for basic functionality.

## License

MIT
