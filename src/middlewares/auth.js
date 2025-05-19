// Проверяем, что в req.user.role есть нужная роль
function checkRole(allowedRoles = []) {
    return function (req, res, next) {
      const userRole = req.user.role;
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Доступ запрещён' });
      }
      next();
    };
  }
  
  module.exports = {
    checkRole,
  };