module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/first': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-absolute-path': 'error',
    'import/no-deprecated': 'warn', // this is an in progress rule
    'import/no-duplicates': 'error',
    'global-require': 'off', // disable because no need to have both!
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-relative-packages': 'warn',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-unused-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
  },
}
