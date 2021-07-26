const Joi = require('joi');

const StudentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  grade: Joi.number().required(),
  language: Joi.string().required(),
  parentsContacts: Joi.any().required(),
  streamId: Joi.number().required(),
  email: Joi.string().email(),
  status: Joi.string().valid('Активный', 'В резерве', 'Отчисленный', 'В ожидании').required(),
});

module.exports = { StudentSchema };
