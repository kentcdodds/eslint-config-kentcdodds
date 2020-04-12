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
}
