module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'no-class-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-restricted-imports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',

    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'babel/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
      },
    },
  ],
}
