const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");
const Profile = require("./Profile");

const ForumPost = sequelize.define("ForumPost", {
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
  content: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "forum_posts",
  timestamps: false,
});

ForumPost.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
// ForumPost.belongsTo(Profile, { foreignKey: 'user_id', as: 'profile' });

// ForumPost.associate = models => {
//   ForumPost.belongsTo(models.Profile, {
//     foreignKey: 'profile_id',
//     as: 'author',
//   });
// };

ForumPost.associate = models => {
  ForumPost.belongsTo(models.Profile, {
    foreignKey: 'user_id',
    as: 'profile',
  });
};

module.exports = ForumPost;
