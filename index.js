const fs = require('fs')
const path = require('path')

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', './import.js'],
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    camelcase: 'off', // annoying to disable...
    'capitalized-comments': 'off', // wHO CaRes?
    'class-methods-use-this': 'off', // three words: "componentDidMount" :)
    complexity: ['error', 20],
    'consistent-return': 'error',
    'consistent-this': 'off', // Too many use-cases for reassigning "this" to different values
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    eqeqeq: 'off',
    'for-direction': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'getter-return': ['error', {allowImplicit: true}],
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'id-denylist': 'error',
    'id-length': 'off', // when using short composable functions, using single-letter variables is fine
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'logical-assignment-operators': 'warn',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      {max: 2500, skipBlankLines: false, skipComments: false},
    ],
    'max-lines-per-function': 'off', // this becomes an obvious problem when it's actually a problem...
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': 'off', // this becomes an obvious problem when it's actually a problem...
    'max-statements-per-line': ['error', {max: 1}],
    'multiline-comment-style': 'off', // this would be cool to get the fixer, but too strict.
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off', // we're all grown ups here...
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off', // sometimes this is ok (foo.length - 1 == index of last one)
    'no-misleading-character-class': 'off',
    'no-multi-assign': 'error', // it's handy, but harder to read
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'off', // prevents: new Promise(r => setTimeout(r))
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-imports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-restricted-properties': 'off', // no ideas of what to disallow right now...
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^ignored',
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': ['error', {location: 'anywhere', terms: ['fixme']}],
    'no-with': 'off',
    'object-shorthand': ['error', 'properties'], // methods are optional so you can specify a name if you want
    'one-var': ['error', {initialized: 'never', uninitialized: 'always'}],
    'operator-assignment': 'off', // readability on a case-by-case basis
    'padding-line-between-statements': 'off', // meh...
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'off', // nah, I like it, but not that much...
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group': 'off', // maybe one day... But I'm not used to it yet.
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'off', // maybe one day... Not sure I'm in...
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-atomic-updates': 'off',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',
    strict: 'error',
    'symbol-description': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: tsConfig,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-new-symbol': 'off', // ts(2588)
        'no-obj-calls': 'off', // ts(2349)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376)
        'no-undef': 'off', // ts(2304)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'valid-typeof': 'off', // ts(2367)

        'consistent-return': 'off', // in TS this is much less an issue
        'no-var': 'error', // TS transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // TS provides better types with const
        'prefer-rest-params': 'error', // TS provides better types with rest args over arguments
        'prefer-spread': 'error', // TS transpiles spread to apply, so no need for manual apply

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',

        'no-implied-eval': 'error',
        '@typescript-eslint/no-implied-eval': 'error',

        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',

        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',

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

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^ignored',
          },
        ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/ban-types': 'off', // not useful in a reusable config
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off', // I think I prefer typed imports, but you can't always use them
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'warn',
        '@typescript-eslint/no-confusing-non-null-assertion': 'off', // prettier reformats their "correct" example anyway 🤷‍♂️
        '@typescript-eslint/no-confusing-void-expression': 'off', // honestly, it's probably a good rule, but I do this all the time so...
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
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
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error', // yeah, I don't like this feature
        '@typescript-eslint/no-require-imports': 'off', // sometimes you can't do it any other way
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn', // I'm not sure I understand this one
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn', // seems like an ok idea, but I don't have enough experience with TS yet.
        '@typescript-eslint/no-unsafe-call': 'warn', // seems like an ok idea, but I don't have enough experience with TS yet.
        '@typescript-eslint/no-unsafe-member-access': 'warn', // seems like an ok idea, but I don't have enough experience with TS yet.
        '@typescript-eslint/no-unsafe-return': 'off', // seems like an ok idea, but it failed on a regular React Component
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error', // makes total sense
        '@typescript-eslint/prefer-for-of': 'off', // I prefer for of, but I don't want to lint for it
        '@typescript-eslint/prefer-function-type': 'off', // though I'm not sure I understand it
        '@typescript-eslint/prefer-includes': 'error', // normally I wouldn't but includes is just so much better
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/sort-type-union-intersection-members': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
  ],
}
