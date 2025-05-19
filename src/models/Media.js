const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const Article = require("./Article");

const Media = sequelize.define("Media", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  article_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  source: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: "media",
  timestamps: false,
});

Media.belongsTo(Article, { foreignKey: "article_id", onDelete: "CASCADE" });

module.exports = Media;
