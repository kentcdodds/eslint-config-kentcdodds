module.exports = {
  extends: ['./non-rules-config.js', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    'object-shorthand': ['error', 'properties'], // methods are optional so you can specify a name if you want
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'prefer-destructuring': 'off', // nah, I like it, but not that much...
    'sort-imports': 'off',

    'babel/camelcase': 'off',

    'new-cap': 'off',
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],

    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'babel/no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
      },
    },
  ],
}
