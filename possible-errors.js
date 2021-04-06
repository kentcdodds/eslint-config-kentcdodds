module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'for-direction': 'error',
    'getter-return': ['error', {allowImplicit: true}],
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'off',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'off',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'off', // prevents: new Promise(r => setTimeout(r))
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // variables
    'no-use-before-define': ['error', 'nofunc'],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'getter-return': 'off', // ts(2378)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-obj-calls': 'off', // ts(2349)
        'no-setter-return': 'off', // ts(2408)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'valid-typeof': 'off', // ts(2367)

        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn', // seems like an ok idea, but I don't have enough experience with TS yet.
        '@typescript-eslint/no-unsafe-call': 'warn', // seems like an ok idea, but I don't have enough experience with TS yet.
        '@typescript-eslint/no-unsafe-member-access': 'warn', // seems like an ok idea, but I don't have enough experience with TS yet.
        '@typescript-eslint/no-unsafe-return': 'off', // seems like an ok idea, but it failed on a regular React Component
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      },
    },
  ],
}
