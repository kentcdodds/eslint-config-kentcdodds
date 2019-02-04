module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/max-dependencies': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    // Prohibit named exports. Mostly an inverse of no-default-export.
    'import/no-named-export': 'off',
    'import/unambiguous': 'off', // not sure I understand this rule well enough right now...
    'import/no-relative-parent-imports': 'off',
  },
}
