const Joi = require("joi");

const MediaScheme = {
  create: Joi.object().keys({
    article_id: Joi.number().integer().required(),
    source: Joi.string().uri().required(),
  }),

  update: Joi.object().keys({
    source: Joi.string().uri(),
  }),
};

module.exports = MediaScheme;
