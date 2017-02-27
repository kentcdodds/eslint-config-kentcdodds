module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
  },
  env: {
    'jest/globals': true,
  },
}
