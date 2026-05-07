/**
 * Seed script to push the mock data to the database.
 * Usage: node scripts/seed-database.js
 */

const data = require('../lib/data.js'); // Assuming we can read the raw JSON or we will just copy it here

// Since lib/data is TS, let's just make a standalone JS script with the data embedded
// or better yet, fetch to localhost:3000/api/import-schools

async function seed() {
  console.log('Seeding database via API...');
  
  // We'll just run a curl or use node fetch
  // This expects the Next.js server to be running on port 3000
  
  // For demonstration, here are two dummy schools. In reality, you'd load your massive JSON here.
  const schools = [
    {
      name: "Chiang Mai International School",
      location: "Hang Dong, Chiang Mai",
      city: "Chiang Mai",
      coordinates: { lat: 18.7061, lng: 98.9116 },
      curriculum: ["International (American)", "IB"],
      fees: { min: 380000, max: 520000, currency: "THB" },
      rating: 4.7,
      type: "international",
      admissionOpen: false
    },
    {
      name: "Pattaya British International",
      location: "Jomtien, Pattaya",
      city: "Pattaya",
      coordinates: { lat: 12.8985, lng: 100.8687 },
      curriculum: ["International (British)", "Cambridge"],
      fees: { min: 420000, max: 580000, currency: "THB" },
      rating: 4.5,
      type: "international",
      admissionOpen: true
    }
  ];

  try {
    const response = await fetch('http://localhost:3000/api/import-schools', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ schools })
    });

    const result = await response.json();
    console.log('Result:', result);
  } catch (error) {
    console.error('Failed to seed:', error);
  }
}

seed();
