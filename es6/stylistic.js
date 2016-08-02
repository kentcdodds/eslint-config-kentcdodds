module.exports = {
  "extends": "./non-rules-config.js",
  "rules": {
    "arrow-body-style": 0, // this is nice, but not useful all the time.
    "arrow-spacing": [2, {"before": true, "after": true}],
    "prefer-arrow-callback": [2, {"allowNamedFunctions": true, "allowUnboundThis": true}],
    "rest-spread-spacing": [2, "never"],
    "sort-imports": 0,
    "template-curly-spacing": [2, "never"],
    "yield-star-spacing": [2, {"before": false, "after": true}],

    // babel plugin
    //   better than eslint's version
    //   first disable eslint's version and then set babel's version
    "array-bracket-spacing": 0,
    "babel/array-bracket-spacing": [2, "never"],

    "arrow-parens": 0,
    "babel/arrow-parens": [2, "as-needed"],

    "generator-star-spacing": 0,
    "babel/generator-star-spacing": [2, "after"],

    "object-curly-spacing": 0,
    "babel/object-curly-spacing": [2, "never"],

    "object-shorthand": [2, "properties"], // methods are optional so you can specify a name if you want
    "babel/object-shorthand": [2, "properties"], // methods are optional so you can specify a name if you want

    "new-cap": 0,
    "babel/new-cap": [2, {
      "newIsCap": true,
      "capIsNew": true,
    }],

    //   no eslint version
    "babel/flow-object-type": 0, // no opinion
    "babel/func-params-comma-dangle": [2, "only-multiline"],
  },
}
