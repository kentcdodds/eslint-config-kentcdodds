module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    complexity: ['error', 14],
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'off',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'off', // we're all grown ups here...
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off', // sometimes this is ok (foo.length - 1 == index of last one)
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off', // no ideas of what to disallow right now...
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': ['error', {terms: ['fixme'], location: 'anywhere'}],
    'no-with': 'off',
    'prefer-promise-reject-errors': 'off', // maybe one day... Not sure I'm in...
    'prefer-named-capture-group': 'off', // maybe one day... But I'm not used to it yet.
    radix: 'error',
    'require-await': 'error', // if you don't need async, don't use async or return Promise.resolve...
    'vars-on-top': 'error',
    yoda: 'error',
    'require-atomic-updates': 'off',
    'require-unicode-regexp': 'off',
    'no-misleading-character-class': 'off',
    'no-async-promise-executor': 'off',
    'no-import-assign': 'error',
    'prefer-regex-literals': 'error',

    // strict
    strict: 'error',

    // variables
    'default-param-last': 'error',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^ignored',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // CommonJS
    'callback-return': 'off', // see known limitations: http://eslint.org/docs/rules/callback-return it's just annoying...
    'global-require': 'warn', // sometimes this is ok. We shouldn't break a build
    'handle-callback-err': 'error',
    'no-mixed-requires': ['error', {grouping: true, allowCall: false}],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
}
