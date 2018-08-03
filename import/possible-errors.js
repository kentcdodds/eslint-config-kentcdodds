module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-cycle': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'off',
  },
}
