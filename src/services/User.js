const UserRepository = require("../repositories/User");
const User = require("../models/User"); 
const bcrypt = require('bcrypt');

class UserService {
  async createUser(data) {
    const { email, password, role } = data;

    // Хешируем пароль перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
    });
    return newUser;
  }

  async getUserById(id) {
    return await UserRepository.read(id);
  }

  async updateUser(id, userData) {
    await UserRepository.update(id, userData);
  }

  async deleteUser(id) {
    await UserRepository.delete(id);
  }

  async getAllUsers() {
    return await UserRepository.list();
  }

  async getProfile(userId) {
    return await UserRepository.read(userId);
  }

  async validateUser(email, password) {
    // Проверяем, есть ли пользователь с таким email
    const user = await User.findOne({ where: { email } });
    if (!user) return null;

    // Сравниваем хеш пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user; // если всё ок, возвращаем объект пользователя
  }
}

module.exports = new UserService();
