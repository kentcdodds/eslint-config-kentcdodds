module.exports = {
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    // only a warning until this is fixed: https://github.com/benmosher/eslint-plugin-import/issues/671
    'import/no-unassigned-import': 1,
  },
}
