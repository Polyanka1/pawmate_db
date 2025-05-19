const Joi = require("joi");

const AddressScheme = {
  create: Joi.object().keys({
    country: Joi.string().max(255).required(),
    city: Joi.string().max(255).required(),
    street: Joi.string().max(255).required(),
    building: Joi.string().max(255).required(),
    block: Joi.number().integer().allow(null),
    flat: Joi.number().integer().allow(null),
  }),

  update: Joi.object().keys({
    country: Joi.string().max(255),
    city: Joi.string().max(255),
    street: Joi.string().max(255),
    building: Joi.string().max(255),
    block: Joi.number().integer().allow(null),
    flat: Joi.number().integer().allow(null),
  }),
};

module.exports = AddressScheme;
