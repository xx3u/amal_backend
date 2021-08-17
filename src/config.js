module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
};
