const { format } = require('date-fns')

const mapUser = user => ({
  id: user.id,
  email: user.email,
  password: user.password,
  role: user.role,
});

module.exports = mapUser;
