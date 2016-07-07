module.exports = {
  "extends": "./index.js",
  "plugins": [
    "mocha",
  ],
  "rules": {
    "max-nested-callbacks": [2, 15], // them its and describes...
    "max-len": [2, 240], // them verbose it statements

    "mocha/handle-done-callback": 2, // don't forget that "done" !
    "mocha/no-exclusive-tests": 2, // never push exclusive tests
    "mocha/no-global-tests": 0,
    "mocha/no-pending-tests": 0,
    "mocha/no-skipped-tests": 0,
    "mocha/no-synchronous-tests": 0,
    "mocha/valid-suite-description": 0,
    "mocha/valid-test-description": 0,
  },
  "env": {
    "mocha": true,
  },
  "globals": {
    "chai": false, // because chai is the bomb
    "expect": false, // when using karma-chai
    "sinon": false, // when using karma-sinon
  },
}
