const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");
const ForumPost = require("./ForumPost");

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
    allowNull: true,
  },
  surname: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: "profiles",
  timestamps: false,
});


  

  



module.exports = Profile;
