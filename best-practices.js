module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off', // three words: "componentDidMount" :)
    complexity: ['error', 14],
    'consistent-return': 'error',
    'default-case': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    eqeqeq: 'off',
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
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
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off', // no ideas of what to disallow right now...
    'no-return-assign': 'error',
    'no-return-await': 'error',
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
    'prefer-named-capture-group': 'off', // maybe one day... But I'm not used to it yet.
    'prefer-promise-reject-errors': 'off', // maybe one day... Not sure I'm in...
    'prefer-regex-literals': 'off',
    radix: 'error',
    'require-await': 'error', // if you don't need async, don't use async or return Promise.resolve...
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    yoda: 'error',

    // strict
    strict: 'error',

    // variables
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
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
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', {grouping: true, allowCall: false}],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
}
