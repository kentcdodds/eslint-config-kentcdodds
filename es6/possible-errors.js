module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'constructor-super': 'error',
    'no-await-in-loop': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'babel/no-unused-expressions': 'error',
    'no-unused-expressions': 'off',
    'babel/quotes': [
      'error',
      'single',
      {avoidEscape: true, allowTemplateLiterals: true},
    ],
  },
}
