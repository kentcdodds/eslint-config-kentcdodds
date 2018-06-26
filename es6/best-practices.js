module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'class-methods-use-this': 'off', // three words: "componentDidMount" :)
    'no-class-assign': 'error',
    'no-duplicate-imports': 'error',
    // not applicable for a config preset (should be configured only in projects)
    'no-restricted-imports': 'off',
    'no-return-await': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off', // maybe one day
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',

    // babel plugin
    //   no eslint version
    'babel/no-await-in-loop': 'off', // this is deprecated
  },
}
