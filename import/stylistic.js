module.exports = {
  "extends": "./non-rules-config.js",
  "rules": {
    "import/no-named-as-default": 2,
    "import/extensions": 2,
    "import/newline-after-import": 2,
    "import/no-amd": 2,
    "import/no-commonjs": 0,
    "import/no-namespace": 0,
    "import/no-nodejs-modules": 0,
    "import/order": [1, {"groups": ["builtin", ["external", "internal"], "parent", ["sibling", "index"]]}],
  },
}
