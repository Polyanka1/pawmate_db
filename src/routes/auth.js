const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UserService = require('../services/User');

// Берём секрет из .env или config
const JWT_SECRET = 'SUPER_SECRET_KEY';

// POST /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Проверяем пользователя
    const user = await UserService.validateUser(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Неверный email или пароль' });
    }

    // Если пользователь найден, генерируем токен
    // В payload положим id, email и роль
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' } // токен действует 1 день
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /auth/register
// Если нужно, здесь же делаем регистрацию
router.post('/register', async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json({ message: 'Пользователь создан', userId: newUser.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;