module.exports = {
  extends: 'prettier/babel',
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
}
