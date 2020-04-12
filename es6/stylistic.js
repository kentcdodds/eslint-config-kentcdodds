module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'arrow-body-style': 'off', // this is nice, but not useful all the time.
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'sort-imports': 'off',

    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',

    'new-cap': 'off',
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    camelcase: 'off',
    'babel/camelcase': ['error', {properties: 'always'}],

    'valid-typeof': 'off',
    'babel/valid-typeof': 'error',
  },
}
