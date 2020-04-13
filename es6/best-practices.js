module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'no-class-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-restricted-exports': 'off', // not applicable for a config preset (should be configured only in projects)
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
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-duplicate-imports': 'error',
        '@typescript-eslint/no-duplicate-imports': 'error',

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
  ],
}
