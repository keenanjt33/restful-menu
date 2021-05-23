module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
  },
};
