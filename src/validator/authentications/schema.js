/* eslint-disable linebreak-style */
const Joi = require('joi');

const PostAuthenticationPayLoadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const PutAuthenticationPayLoadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAuthenticationPayLoadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  PostAuthenticationPayLoadSchema,
  PutAuthenticationPayLoadSchema,
  DeleteAuthenticationPayLoadSchema,
};
