module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'arrow-body-style': 'off', // this is nice, but not useful all the time.
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'sort-imports': 'off',

    'babel/object-curly-spacing': 'off',
    'babel/semi': 'off',

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

    //   no eslint version
    'babel/flow-object-type': 'off', // no opinion

    // deprecated rules
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/object-shorthand': 'off',
  },
}
