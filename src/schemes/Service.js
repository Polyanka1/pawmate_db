const Joi = require("joi");

const ServiceScheme = {
  create: Joi.object().keys({
    user_id: Joi.number().integer().required(),
    title: Joi.string().max(255).required(),
    description: Joi.string().allow(null, ""),
    price: Joi.number().precision(2).min(0).default(0),
    user_email: Joi.string().email().allow(null, ""),
    address: Joi.string().max(100).allow(null, ""),
        photo: Joi.string().uri(),
  }),

  update: Joi.object().keys({
    title: Joi.string().max(255),
    description: Joi.string().allow(null, ""),
    price: Joi.number().precision(2).min(0),
    user_email: Joi.string().email().allow(null, ""),
    address: Joi.string().max(100).allow(null, ""),
        photo: Joi.string().uri(),
  }),
};

module.exports = ServiceScheme;
