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

### Mocha

This config lib also includes a [`mocha`](https://mochajs.org/) config

```javascript
{
  "extends": "kentcdodds/mocha"
}
```

### AVA

This config lib also includes an [`AVA`](https://github.com/avajs/ava) config

```javascript
{
  "extends": "kentcdodds/ava"
}
```

### React

This config lib also includes a `react` config:

```javascript
{
  "extends": "kentcdodds/react"
}
```

### Webpack

We lint your import/require statements. With webpack overloading these, you may
want to have these resolved the way webpack resolves them for you.

```javascript
{
  "extends": "kentcdodds/webpack"
}
```



## LICENSE

MIT
