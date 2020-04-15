module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'constructor-super': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',

    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    'valid-typeof': 'off',
    'babel/valid-typeof': 'error',
  },
}
