module.exports = {
  "plugins": [
    "import",
  ],
  "env": {
    "es6": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {"experimentalObjectRestSpread": true},
  },
  "settings": {
    "import/ignore": [
      "node_modules",
      ".json$",
      ".(scss|less|css|styl)$",
    ],
  },
}
