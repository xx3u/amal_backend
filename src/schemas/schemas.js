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
  address: Joi.string().allow(null, ''),
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
const RegisterSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(8),
  role: Joi.string().valid('admin', 'teacher', 'student').required(),
  teacherId: Joi.number().allow(null, ''),
});
const LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
const PaymentSchema = Joi.object({
  studentId: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
  date: Joi.date().required(),
  amount: Joi.number().required(),
  comment: Joi.string().allow(null, ''),
});
const TeacherSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  language: Joi.string().required(),
  telephone: Joi.number().required(),
  email: Joi.string().email().allow(null, ''),
});
const SubjectSchema = Joi.object({
  subjectName: Joi.string().required(),
});
const StreamSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  StudentSchema,
  LessonSchema,
  RegisterSchema,
  LoginSchema,
  PaymentSchema,
  TeacherSchema,
  SubjectSchema,
  StreamSchema,
};
