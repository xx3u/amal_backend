const Joi = require('joi');

const StudentSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.base': `Неверный формат,Имя должно быть текстом`,
    'string.empty': `Имя не должно быть пустым`,
    'any.required': `Имя не должно быть пустым`,
  }),
  lastName: Joi.string().required().messages({
    'string.base': `Неверный формат,Фамилия должна быть текстом`,
    'string.empty': `Фамилия не должно быть пустым`,
    'any.required': `Фамилия не должно быть пустым`,
  }),
  middleName: Joi.string().allow(null, ''),
  grade: Joi.number().required().messages({
    'number.base': `Неверный формат, класс должен быть цифрой`,
    'number.empty': `Имя не должно быть пустым`,
    'any.required': `Имя не должно быть пустым`,
  }),
  language: Joi.string().required().messages({
    'string.base': `Неверный формат, язык`,
    'string.empty': `Язык обязательное поле`,
    'any.required': `Язык обязательное поле`,
  }),
  school: Joi.string().allow(null, ''),
  parentsContacts: Joi.any().required().messages({
    'string.base': `Неверный формат, контакты`,
    'string.empty': `Контакты не должны быть пустыми`,
    'any.required': `Контакты не должны быть пустыми`,
  }),
  streamId: Joi.number().required().messages({
    'string.base': `Неверный формат, направление `,
    'string.empty': `Направление не должно быть пустыми`,
    'any.required': `Направление не должно быть пустыми`,
  }),
  groupId: Joi.number().allow(null, '').messages({
    'number.base': `Неверный формат, телефон не должен содержать буквы`,
  }),
  address: Joi.string().allow(null, ''),
  telephone: Joi.number().allow(null, '').messages({
    'number.base': `Неверный формат, телефон не должен содержать буквы`,
  }),
  email: Joi.string().email().allow(null, '').messages({
    'string.email': `Неверный формат, Email должен быть типа abc@abc.com `,
  }),
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
  username: Joi.string().required().messages({
    'string.base': `Имя пользователя должно быть текстом'`,
    'string.empty': `Имя пользователя не должно быть пустым`,
    'any.required': `Имя пользователя не должно быть пустым`,
  }),
  password: Joi.string().required().min(8),
  role: Joi.string().valid('admin', 'teacher', 'student').required(),
  teacherId: Joi.number().allow(null, ''),
});
const LoginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.base': `Имя пользователя должно быть текстовым'`,
    'string.empty': `Имя пользователя не должно быть пустым`,
    'any.required': `Имя пользователя не должно быть пустым`,
  }),
  password: Joi.string().required().messages({
    'string.base': `Пароль не должен быть пустым`,
    'string.empty': `Пароль не должен быть пустым`,
    'any.required': `Пароль не должен быть пустым`,
  }),
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
  subjectId: Joi.number().required(),
});
const SubjectSchema = Joi.object({
  subjectName: Joi.string().required(),
});
const StreamSchema = Joi.object({
  name: Joi.string().required(),
});
const GroupSchema = Joi.object({
  groupName: Joi.string().required(),
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
  GroupSchema,
};
