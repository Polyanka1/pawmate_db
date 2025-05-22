const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    allowNull: false, 
    defaultValue: 'user',
  },
}, {
  tableName: "users",
  timestamps: false,
});

module.exports = User;
