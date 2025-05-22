const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");

const Service = sequelize.define("Service", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  user_email: {
    type: DataTypes.STRING(255),
  },
  address: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  photo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  tableName: "services",
  timestamps: false,
});

Service.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = Service;
