module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off', // three words: "componentDidMount" :)
    complexity: ['error', 20],
    'consistent-return': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
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
    'no-nonoctal-decimal-escape': 'error',
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
    'no-void': 'off',
    'no-warning-comments': ['error', {terms: ['fixme'], location: 'anywhere'}],
    'no-with': 'off',
    'prefer-named-capture-group': 'off', // maybe one day... But I'm not used to it yet.
    'prefer-promise-reject-errors': 'off', // maybe one day... Not sure I'm in...
    'prefer-regex-literals': 'off',
    radix: 'error',
    'require-await': 'off',
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
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-undef': 'off', // ts(2304)

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',

        'no-implied-eval': 'error',
        '@typescript-eslint/no-implied-eval': 'error',

        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',

        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'off', // ts(2451)

        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^ignored',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],

        '@typescript-eslint/require-await': 'off',

        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'off', // not useful in a reusable config
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-base-to-string': 'warn',
        '@typescript-eslint/no-confusing-void-expression': 'off', // honestly, it's probably a good rule, but I do this all the time so...
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'error', // stay away from classes when you can
        '@typescript-eslint/no-floating-promises': 'warn', // not a bad rule, but can be annoying
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off', // I personally prefer relying on inference where possible, but I don't want to lint for it.
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': [
          'warn',
          {checksVoidReturn: false},
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-require-imports': 'off', // sometimes you can't do it any other way
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn', // I'm not sure I understand this one
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error', // makes total sense
        '@typescript-eslint/prefer-function-type': 'off', // though I'm not sure I understand it
        '@typescript-eslint/prefer-includes': 'error', // normally I wouldn't but includes is just so much better
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unbound-method': 'error',

        //  variables
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
  ],
}
