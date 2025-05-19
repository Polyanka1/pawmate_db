const Joi = require("joi");

const UserScheme = {
  create: Joi.object().keys({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(6).max(255).required(),
    role: Joi.string().valid("user", "admin").required(),
  }),

  update: Joi.object().keys({
    email: Joi.string().email().max(255),
    password: Joi.string().min(6).max(255),
    role: Joi.string().valid("user", "admin"),
  }),
};

module.exports = UserScheme;
