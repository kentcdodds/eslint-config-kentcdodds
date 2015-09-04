module.exports = {
  "extends": "kentcdodds",
  "plugins": [
    "mocha"
  ],
  "rules": {
    "max-nested-callbacks": [2, 15], // them its and describes...
    "max-len": [2, 240], // them verbose it statements
    "mocha/no-exclusive-tests": 2, // never push exclusive tests
    "mocha/handle-done-callback": 2 // don't forget that "done" !
  },
  "env": {
    "mocha": true
  },
  "globals": {
    "chai": false, // because chai is the bomb
    "expect": false, // when using karma-chai
    "sinon": false // when using karma-sinon
  }
};

