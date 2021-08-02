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
const LessonSchema = Joi.object({
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  groupId: Joi.number().required(),
  teacherId: Joi.number().required(),
  subjectId: Joi.number().required(),
});

module.exports = { StudentSchema, LessonSchema };
