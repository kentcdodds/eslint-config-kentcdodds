module.exports = {
  hooks: {
    'pre-commit': 'pretty-quick --staged && npm run validate',
  },
}
