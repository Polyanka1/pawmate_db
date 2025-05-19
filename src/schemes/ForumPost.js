const Joi = require("joi");

const ForumPostScheme = {
  create: Joi.object().keys({
    user_id: Joi.number().integer().required(),
    title: Joi.string().max(255).required(),
    content: Joi.string().allow(null, ""),
  }),

  update: Joi.object().keys({
    title: Joi.string().max(255),
    content: Joi.string().allow(null, ""),
  }),
};

module.exports = ForumPostScheme;
