module.exports = {
  env: {
    es6: true,
  },
  extends: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['@babel'],
  rules: {
    'arrow-body-style': 'off',
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-restricted-imports': 'off', // not applicable for a config preset (should be configured only in projects)
    'no-this-before-super': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'], // methods are optional so you can specify a name if you want
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: true, allowUnboundThis: true},
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'off', // nah, I like it, but not that much...
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error',

    'new-cap': 'off',
    '@babel/new-cap': ['error', {capIsNew: true, newIsCap: true}],

    'no-invalid-this': 'off',
    '@babel/no-invalid-this': 'error',

    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'no-const-assign': 'off', // ts(2588)
        'no-new-symbol': 'off', // ts(2588)
        'no-this-before-super': 'off', // ts(2376)
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        '@babel/no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',

        '@babel/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
      },
    },
  ],
}
