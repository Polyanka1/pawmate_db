const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");
const ForumPost = require("./ForumPost");

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  post_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "comments",
  timestamps: false,
});

Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Comment.belongsTo(ForumPost, { foreignKey: "post_id", onDelete: "CASCADE" });

module.exports = Comment;
