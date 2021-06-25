module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'max-len': ['warn', { code: 120 }],
    indent: ['warn', 2, {
      SwitchCase: 1,
    }],
    'linebreak-style': ['error', 'unix', 'window'],
  },
};
