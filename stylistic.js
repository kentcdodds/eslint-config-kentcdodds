module.exports = {
  extends: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    camelcase: ['error', {properties: 'always'}],
    'capitalized-comments': 'off', // wHO CaRes?
    'consistent-this': 'off', // Too many use-cases for reassigning "this" to different values
    'func-names': 'error',
    'func-name-matching': 'error',
    'func-style': 'off',
    'id-blacklist': 'error',
    'init-declarations': 'off',
    'id-length': 'off', // when using short composable functions, using single-letter variables is fine
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'linebreak-style': ['error', 'unix'],
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      {max: 2500, skipBlankLines: false, skipComments: false},
    ],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements-per-line': ['error', {max: 1}],
    'max-statements': ['error', 40],
    'multiline-comment-style': 'off', // this would be cool to get the fixer, but too strict.
    'new-cap': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
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
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'object-shorthand': ['error', 'properties'], // methods are optional so you can specify a name if you want
    'one-var': ['error', {uninitialized: 'always', initialized: 'never'}],
    'operator-assignment': 'off', // readability on a case-by-case basis
    'padding-line-between-statements': 'off', // meh...
    'prefer-destructuring': 'off', // nah, I like it, but not that much...
    'prefer-object-spread': 'warn',
    'require-jsdoc': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',
  },
}
