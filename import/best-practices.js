module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/first': 2,
    // hmm... this rule appears to be an alias to import/first... But I gotta configure them allllllll!
    'import/imports-first': 2,
    'import/max-dependencies': [2, {max: 14}],
    'import/no-absolute-path': 2,
    'import/no-deprecated': 1, // this is an in progress rule
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 1, // sometimes it can be handy, shouldn't break a build
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 2,
    'import/no-restricted-paths': 0,
    'import/no-unassigned-import': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/prefer-default-export': 1,
    'import/unambiguous': 0, // not sure I understand this rule well enough right now...
  },
}
