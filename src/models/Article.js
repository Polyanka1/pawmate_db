const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Article = sequelize.define("Article", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: "articles",
  timestamps: false,
});

module.exports = Article;
