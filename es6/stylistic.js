module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'arrow-body-style': 'off', // this is nice, but not useful all the time.
    'object-shorthand': ['error', 'properties'], // methods are optional so you can specify a name if you want
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'prefer-destructuring': 'off', // nah, I like it, but not that much...
    'sort-imports': 'off',

    camelcase: 'off',
    'babel/camelcase': ['error', {properties: 'always'}],
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
}
