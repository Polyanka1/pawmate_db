const sequelize = require("./sequelize");


class DataBase {
  async connect() {
    try {
      await sequelize.authenticate();
      console.log("DB connected");
      await sequelize.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = new DataBase();