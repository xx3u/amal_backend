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
  telephone: Joi.string()
    .allow(null, '')
    .pattern(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .messages({
      'string.pattern.base': `Неверный формат, телефон `,
    }),
  email: Joi.string().email().allow(null, '').messages({
    'string.email': `Неверный формат, Email должен быть типа abc@abc.com `,
  }),
  status: Joi.string().valid('Активный', 'В резерве', 'Отчисленный', 'В ожидании').required(),
});
const LessonSchema = Joi.object({
  startTime: Joi.date().required().messages({
    'date.base': `Неверный формат, даты `,
    'any.required': `startTime не должно быть пустыми`,
  }),
  endTime: Joi.date().required().messages({
    'date.base': `Неверный формат, даты `,
    'any.required': `endTime не должно быть пустыми`,
  }),
  groupId: Joi.number().required().messages({
    'number.base': `Неверный формат, groupId`,
    'any.required': `groupId не должно быть пустыми`,
  }),
  teacherId: Joi.number().required().messages({
    'number.base': `Неверный формат, teacherId`,
    'any.required': `teacherId не должно быть пустыми`,
  }),
  subjectId: Joi.number().required().messages({
    'number.base': `Неверный формат, groupId`,
    'any.required': `groupId не должно быть пустыми`,
  }),
});
const RegisterSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.base': `Неверный формат,username`,
    'string.empty': `Имя пользователя не должно быть пустым`,
    'any.required': `Имя пользователя не должно быть пустым`,
  }),
  password: Joi.string().required().min(8).messages({
    'string.base': `Неверный формат,password`,
    'string.empty': `Пароль  не должно быть пустым`,
    'string.min': `Пароль не должен быть меньше 8 символов`,
    'any.required': `Пароль  не должно быть пустым`,
  }),
  role: Joi.string().valid('admin', 'teacher').required().messages({
    'string.base': `Неверный формат, role`,
    'string.empty': `Роль не должна быть пустой`,
    'any.required': `Роль не должна быть пустой`,
    'any.only': `Роль не должна быть пустой`,
  }),
  teacherId: Joi.number().allow(null, '').messages({
    'number.base': `Неверный формат, teacherId`,
  }),
});
const LoginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.base': `Неверный формат,username`,
    'string.empty': `Имя пользователя не должно быть пустым`,
    'any.required': `Имя пользователя не должно быть пустым`,
  }),
  password: Joi.string().required().messages({
    'string.base': `Неверный формат,password`,
    'string.empty': `Пароль не должен быть пустым`,
    'any.required': `Пароль не должен быть пустым`,
  }),
});
const PaymentSchema = Joi.object({
  studentId: Joi.alternatives().try(Joi.string(), Joi.number()).required().messages({
    'alternatives.types': `Неверный формат,studentId`,
    'any.required': `studentId не должен быть пустым`,
  }),
  date: Joi.date().required().messages({
    'date.base': `Неверный формат, даты `,
    'any.required': `date не должно быть пустыми`,
  }),
  amount: Joi.number().required().messages({
    'number.base': `Неверный формат, Оплаты`,
    'any.required': `Оплата не должна быть пустой`,
  }),
  comment: Joi.string().allow(null, ''),
});
const TeacherSchema = Joi.object({
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
  language: Joi.string().required().messages({
    'string.base': `Неверный формат, role`,
    'string.empty': `Роль не должно быть пустым`,
    'any.required': `Роль не должно быть пустым`,
  }),
  telephone: Joi.string()
    .pattern(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .required()
    .messages({
      'string.pattern.base': `Неверный формат, телефон `,
    }),
  email: Joi.string().email().allow(null, '').messages({
    'string.email': `Неверный формат, Email должен быть типа abc@abc.com `,
  }),
  subjectId: Joi.number().required().messages({
    'number.base': `Неверный формат, subjectId`,
    'any.required': `Предмет не должен быть пустым`,
  }),
});
const SubjectSchema = Joi.object({
  subjectName: Joi.string().required().messages({
    'string.base': `Неверный формат, subjectName`,
    'string.empty': `Предмет не должен быть пустым`,
    'any.required': `Предмет не должен быть пустым`,
  }),
});
const StreamSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': `Неверный формат, streamName`,
    'string.empty': `Направление не должно быть пустым`,
    'any.required': `Направление не должно быть пустым`,
  }),
});
const GroupSchema = Joi.object({
  groupName: Joi.string().required().messages({
    'string.base': `Неверный формат, groupName`,
    'string.empty': `Группа не должна быть пустым`,
    'any.required': `Группа не должна быть пустым`,
  }),
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
