module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {},
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
