module.exports = {
  extends: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    camelcase: [2, {properties: 'always'}],
    'capitalized-comments': 0, // wHO CaRes?
    'consistent-this': 0, // Too many use-cases for reassigning "this" to different values
    'func-names': 2,
    'func-name-matching': 2,
    'func-style': 0,
    'id-blacklist': 2,
    'init-declarations': 0,
    'id-length': 0, // when using short composable functions, using single-letter variables is fine
    'id-match': [
      2,
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'linebreak-style': [2, 'unix'],
    'line-comment-position': 0,
    'lines-around-comment': 0,
    'lines-around-directive': 0,
    'max-depth': [2, 4],
    'max-lines': [2, {max: 500, skipBlankLines: false, skipComments: false}],
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 5],
    'max-statements-per-line': [2, {max: 1}],
    'max-statements': [2, 30],
    'new-cap': 2,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-multi-assign': 2, // it's handy, but harder to read
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-shorthand': [2, 'properties'], // methods are optional so you can specify a name if you want
    'one-var': [2, {uninitialized: 'always', initialized: 'never'}],
    'operator-assignment': 0, // readability on a case-by-case basis
    'padding-line-between-statements': 0, // meh...
    'prefer-destructuring': 0, // nah, I like it, but not that much...
    'require-jsdoc': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    'spaced-comment': 0,
  },
}
