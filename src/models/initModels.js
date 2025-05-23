// Импорт sequelize instance
const sequelize = require('../database/sequelize');

// Импорт моделей
const User = require('./User');
const Profile = require('./Profile');
const ForumPost = require('./ForumPost');
const Comment = require('./Comment');
const Pet = require('./Pet');
const Service = require('./Service');



// Определение ассоциаций
User.hasOne(Profile, { foreignKey: 'user_id', as: 'profile' });

Profile.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Profile.hasMany(ForumPost, { foreignKey: 'user_id', as: 'posts' });
Profile.hasMany(Comment, { foreignKey: 'user_id', as: 'comments' });
Profile.hasMany(Service, { foreignKey: 'user_id', as: 'services' });
Profile.hasMany(Pet, { foreignKey: 'user_id', as: 'pets' });

ForumPost.belongsTo(Profile, { foreignKey: 'user_id', as: 'profile' });
ForumPost.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Comment.belongsTo(Profile, { foreignKey: 'user_id', as: 'profile' });
Comment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Service.belongsTo(Profile, { foreignKey: 'user_id', as: 'profile' });
Service.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Pet.belongsTo(Profile, { foreignKey: 'user_id', as: 'profile' });
Pet.belongsTo(User, { foreignKey: 'user_id', as: 'user' });


// Экспортируем модели и sequelize
module.exports = {
  sequelize,
  User,
  Profile,
  ForumPost,
  Comment,
  Service,
  Pet,
};
