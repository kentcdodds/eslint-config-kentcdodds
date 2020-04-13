module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'constructor-super': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',

    'valid-typeof': 'off',
    'babel/valid-typeof': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
      },
    },
  ],
}
