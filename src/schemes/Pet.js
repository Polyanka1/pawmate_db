const Joi = require("joi");

const PetScheme = {
  create: Joi.object().keys({
    user_id: Joi.number().integer().required(),
    photo: Joi.string().max(100).required(),
    name: Joi.string().max(100).required(),
    type: Joi.string().max(50).required(),
    breed: Joi.string().max(100).allow(null, ""),
    age: Joi.number().integer().min(0).allow(null),
    weight: Joi.number().precision(2).min(0).allow(null),
    description: Joi.string().allow(null, ""),
  }),

  update: Joi.object().keys({
    photo: Joi.string().max(100),
    name: Joi.string().max(100),
    type: Joi.string().max(50),
    breed: Joi.string().max(100).allow(null, ""),
    age: Joi.number().integer().min(0).allow(null),
    weight: Joi.number().precision(2).min(0).allow(null),
    description: Joi.string().allow(null, ""),
  }),
};

module.exports = PetScheme;
