const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");

const Pet = sequelize.define("Pet", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING(100),
  },
  age: {
    type: DataTypes.INTEGER,
    validate: { min: 0 },
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
    validate: { min: 0 },
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: "pets",
  timestamps: false,
});

Pet.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = Pet;
