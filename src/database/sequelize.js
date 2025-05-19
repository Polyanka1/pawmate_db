const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("pawmate_db", "postgres", "2435", config);

module.exports = sequelize;
