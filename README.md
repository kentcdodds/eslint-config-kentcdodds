# eslint-config-kentcdodds

[![travis build](https://img.shields.io/travis/kentcdodds/eslint-config-kentcdodds.svg?style=flat-square)](https://travis-ci.org/kentcdodds/eslint-config-kentcdodds)
[![version](https://img.shields.io/npm/v/eslint-config-kentcdodds.svg?style=flat-square)](http://npm.im/eslint-config-kentcdodds)
[![downloads](https://img.shields.io/npm/dm/eslint-config-kentcdodds.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-kentcdodds&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/eslint-config-kentcdodds.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

ESLint rules for all of my personal projects. Feel free to use these conventions :-)

## Usage

Install the conventions by running:

```
npm install --save-dev eslint eslint-config-kentcdodds
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "kentcdodds",
  "rules": {
    // your overrides
  }
}
```

### Other configs

This config also exposes a few other configs that I use often and pull in as needed.

You can use them standalone:

```javascript
{
  "extends": "kentcdodds/<config-name>"
}
```

Or in combination with the base config (recommended)

```javascript
{
  "extends": ["kentcdodds", "kentcdodds/<config-name>"]
}
```

- `ava`: [AVA](https://npmjs.com/package/ava) testing framework
- `babel-module-alias`: [babel-plugin-module-alias](https://www.npmjs.com/package/babel-plugin-module-alias) for the import plugin to work with the module-alias babel plugin
- `babel-react-require`: [babel-plugin-react-require](https://www.npmjs.com/package/babel-plugin-react-require) for when you're using the react-require babel plugin (should be used with `"kentcdodds/react"` as well).
- `jsx-a11y`: [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) for rules regarding accessibility with JSX.
- `mocha`: [mocha](https://npmjs.com/package/mocha) testing framework
- `react`: [React](https://www.npmjs.com/package/react) JS library
- `webpack`: [Webpack](https://npmjs.com/package/webpack) for the import plugin to work with webpack overloaded imports/requires


### Things to know

- The base config uses `babel-eslint` to support stage features that ESLint doesn't support and it opts to use the `eslint-plugin-babel` rules over the ESLint rules to support rules for these features as well.
- The base config assumes Babel. I would like to break some stuff out to a `common` config to share between the base config (`index`), an `es5` config and an `es6` config (which would exclude modules) so this could be used in non-babelified projects.
- All plugins needed for rules used by these configs are dependencies of this module so you don't have to install anything on your own.

## LICENSE

MIT
