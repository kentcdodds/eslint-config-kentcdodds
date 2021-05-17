module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
  },
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
}
