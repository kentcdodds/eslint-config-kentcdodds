const {mapDeprecatedRules} = require('../utils')

module.exports = {
  extends: './non-rules-config.js',
  rules: mapDeprecatedRules(['import/imports-first']),
}
