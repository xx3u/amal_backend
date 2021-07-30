const Joi = require('joi');

const StudentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  middleName: Joi.string().allow(null, ''),
  grade: Joi.number().required(),
  language: Joi.string().required(),
  school: Joi.string().allow(null, ''),
  parentsContacts: Joi.any().required(),
  streamId: Joi.number().required(),
  groupId: Joi.number().allow(null, ''),
  adress: Joi.string().allow(null, ''),
  telephone: Joi.string().allow(null, ''),
  email: Joi.string().email().allow(null, ''),
  status: Joi.string().valid('Активный', 'В резерве', 'Отчисленный', 'В ожидании').required(),
});

module.exports = { StudentSchema };
