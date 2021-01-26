module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'constructor-super': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-unsafe-optional-chaining': 'error',

    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',

    'valid-typeof': 'off',
    'babel/valid-typeof': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'no-const-assign': 'off', // ts(2588)
        'no-new-symbol': 'off', // ts(2588)
        'no-this-before-super': 'off', // ts(2376)
        'babel/valid-typeof': 'off', // ts(2367)

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

        'babel/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
      },
    },
  ],
}
