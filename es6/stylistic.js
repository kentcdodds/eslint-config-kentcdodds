module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'arrow-body-style': 0, // this is nice, but not useful all the time.
    'prefer-arrow-callback': [
      2,
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'sort-imports': 0,

    'babel/object-curly-spacing': 0,
    'babel/semi': 0,

    'no-invalid-this': 0,
    'babel/no-invalid-this': 2,

    'new-cap': 0,
    'babel/new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],

    //   no eslint version
    'babel/flow-object-type': 0, // no opinion

    // deprecated rules
    'babel/array-bracket-spacing': 0,
    'babel/arrow-parens': 0,
    'babel/func-params-comma-dangle': 0,
    'babel/generator-star-spacing': 0,
    'babel/object-shorthand': 0,
  },
}
