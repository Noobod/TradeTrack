const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URL;

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  if (!mongoUri) {
    throw new Error("MONGO_URL env var is not set");
  }

  // Avoid multiple concurrent connect calls
  if (mongoose.connection.readyState === 0) {
    cachedConnection = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  return cachedConnection;
}

module.exports = { connectToDatabase };


