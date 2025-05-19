const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");
const Address = require("./Address");

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
  },
  first_name: {
    type: DataTypes.STRING(100),
  },
  last_name: {
    type: DataTypes.STRING(100),
  },
  phone: {
    type: DataTypes.STRING(20),
  },
  address_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "profiles",
  timestamps: false,
});

Profile.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Profile.belongsTo(Address, { foreignKey: "address_id", onDelete: "CASCADE" });

module.exports = Profile;
