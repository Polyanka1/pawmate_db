const mongoose = require("mongoose");

const httpLogSchema = new mongoose.Schema({
  method: String,        // GET, POST, PUT и т.д.
  url: String,           // /users, /vacancies и т.д.
  statusCode: Number,    // 200, 404, 500 ...
  userAgent: String,     // Браузер/клиент
  ip: String,            // IP-адрес
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HttpLog", httpLogSchema);