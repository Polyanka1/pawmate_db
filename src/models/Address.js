const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Address = sequelize.define("Address", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  country: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  building: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  block: {
    type: DataTypes.INTEGER,
  },
  flat: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: "address",
  timestamps: false,
});

module.exports = Address;
