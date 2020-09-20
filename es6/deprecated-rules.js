const {mapDeprecatedRules} = require('../utils')

module.exports = {
  extends: './non-rules-config.js',
  rules: mapDeprecatedRules([
    'babel/array-bracket-spacing',
    'babel/arrow-parens',
    'babel/flow-object-type',
    'babel/func-params-comma-dangle',
    'babel/generator-star-spacing',
    'babel/no-await-in-loop',
    'babel/object-shorthand',
  ]),
}
