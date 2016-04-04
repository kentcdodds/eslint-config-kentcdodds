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

### Test and test-angular

This config lib also includes a `test` and a `test-angular` config:

**Note if you use these, you need to install `eslint-plugin-mocha`**

```javascript
{
  "extends": "kentcdodds/test"
}
```

```javascript
{
  "extends": "kentcdodds/test-angular"
}
```

### React

This config lib also includes a `react` config:

**Note if you use this, you'll also need to install `eslint-plugin-react`**:

```javascript
{
  "extends": "kentcdodds/react"
}
```

### ES.next

If you want to use ES.next goodness, you can reference the `es-next` config:

**Note if you use this, you'll also need to install `babel-eslint`**:

```javascript
{
  "extends": "kentcdodds/es-next"
}
```

### webpack

We lint your import/require statements. With webpack overloading these, you may
want to have these resolved the way webpack resolves them for you.

**Note if you use this, you'll also need to install `eslint-import-resolver-webpack`**:

```javascript
{
  "extends": ["kentcdodds", "kentcdodds/webpack"]
}
```



## LICENSE

MIT
