const Joi = require("joi");

const ProfileScheme = {
  create: Joi.object().keys({
    user_id: Joi.number().integer().required(),
    photo: Joi.string().uri(),
    surname: Joi.string().max(100).allow(null, ""),
    first_name: Joi.string().max(100).allow(null, ""),
    last_name: Joi.string().max(100).allow(null, ""),
    phone: Joi.string()
      .pattern(/^\+?[0-9\s\-()]{7,20}$/)
      .allow(null, ""),
    address: Joi.string().max(100).allow(null, ""),
  }),

  update: Joi.object().keys({
    photo: Joi.string().uri(),
    surname: Joi.string().max(100).allow(null, ""),
    first_name: Joi.string().max(100).allow(null, ""),
    last_name: Joi.string().max(100).allow(null, ""),
    phone: Joi.string()
      .pattern(/^\+?[0-9\s\-()]{7,20}$/)
      .allow(null, ""),
    address: Joi.string().max(100).allow(null, ""),
  }),
};

module.exports = ProfileScheme;
