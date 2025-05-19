const mongoose = require("mongoose");

async function connectMongo() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/logsdb";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB for logging");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectMongo;