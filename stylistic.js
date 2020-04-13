module.exports = {
  extends: ['./non-rules-config.js', 'prettier'],
  rules: {
    camelcase: ['error', {properties: 'always'}],
    'capitalized-comments': 'off', // wHO CaRes?
    'consistent-this': 'off', // Too many use-cases for reassigning "this" to different values
    curly: ['error', 'multi-line'],
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'id-denylist': 'error',
    'id-length': 'off', // when using short composable functions, using single-letter variables is fine
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      {max: 2500, skipBlankLines: false, skipComments: false},
    ],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': ['error', 40],
    'max-statements-per-line': ['error', {max: 1}],
    'multiline-comment-style': 'off', // this would be cool to get the fixer, but too strict.
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error', // it's handy, but harder to read
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', {uninitialized: 'always', initialized: 'never'}],
    'operator-assignment': 'off', // readability on a case-by-case basis
    'padding-line-between-statements': 'off', // meh...
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'warn',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',

    // variables
    'init-declarations': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: 'prettier/@typescript-eslint',
      rules: {
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        // variables
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',
      },
    },
  ],
}
