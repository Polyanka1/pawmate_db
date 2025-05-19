const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/User'); // ваша Sequelize-модель пользователя

// Здесь укажите ваш секретный ключ для JWT
// Рекомендуется брать это из переменной окружения: process.env.JWT_SECRET
const JWT_SECRET = 'SUPER_SECRET_KEY'; 

// Создаём JWT-стратегию
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // читать JWT из заголовка Authorization: Bearer <token>
  secretOrKey: JWT_SECRET,
};

const strategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    // payload – это расшифрованные данные из JWT.
    // Обычно туда кладут userId (payload.id), email, role и т.д.
    const user = await User.findByPk(payload.id);

    if (!user) {
      return done(null, false); // если пользователь не найден, аутентификация не пройдена
    }

    // Если пользователь найден, передаём его в req.user
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

// Подключаем стратегию к Passport
passport.use(strategy);

// Экспортируем Passport, чтобы можно было им пользоваться в любом месте
module.exports = passport;