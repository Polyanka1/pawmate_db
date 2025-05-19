const mongoose = require("mongoose");

const dbLogSchema = new mongoose.Schema({
  operation: String,     // create, update, delete и т. д.
  entity: String,        // имя сущности (User, Vacancy, Company, ...)
  data: Object,          // данные, которые были созданы/обновлены/удалены
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("DbLog", dbLogSchema);