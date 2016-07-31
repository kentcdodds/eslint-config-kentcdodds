module.exports = {
  "extends": "./non-rules-config.js",
  "rules": {
    "no-class-assign": 2,
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-duplicate-imports": 2,
    // not applicable for a config preset (should be configured only in projects)
    "no-restricted-imports": 0,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "no-var": 2,
    "prefer-const": 2,
    "prefer-reflect": 0, // maybe one day
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,

    // babel plugin
    //   no eslint version
    "babel/no-await-in-loop": 2, // I don't use async/await, but sounds like a good idea to have on.
  },
}
