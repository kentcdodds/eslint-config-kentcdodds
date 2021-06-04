const disableRules = deprecatedRules =>
  deprecatedRules.reduce(
    (allRules, rule) => ({
      ...allRules,
      [rule]: 'off',
    }),
    {},
  )

const mapDeprecatedRules = disableRules

module.exports = {disableRules, mapDeprecatedRules}
