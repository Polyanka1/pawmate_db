const Joi = require("joi");

const CommentScheme = {
  create: Joi.object().keys({
    post_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
    content: Joi.string().required(),
  }),

  update: Joi.object().keys({
    content: Joi.string().required(),
  }),
};

module.exports = CommentScheme;
