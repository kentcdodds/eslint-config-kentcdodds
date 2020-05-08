const mapDeprecatedRules = deprecatedRules =>
  deprecatedRules.reduce(
    (allRules, rule) => ({
      ...allRules,
      [rule]: 'off',
    }),
    {},
  )

module.exports = {mapDeprecatedRules}
