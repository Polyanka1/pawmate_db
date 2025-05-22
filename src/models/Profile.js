const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");

const Profile = sequelize.define("Profile", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  photo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: "profiles",
  timestamps: false,
});

Profile.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = Profile;
