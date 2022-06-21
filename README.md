<div align="center">
<h1>eslint-config-kentcdodds</h1>

<p>ESLint rules for all of my personal projects. Feel free to use these conventions :-)</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Other configs](#other-configs)
  - [Things to know](#things-to-know)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-config-kentcdodds
```

This library has a required `peerDependencies` listing for [`eslint`][eslint]

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: 'kentcdodds',
  rules: {
    // your overrides
  },
}
```

### Other configs

This config also exposes a few other configs that I use often and pull in as
needed.

You can use them standalone:

```javascript
module.exports = {
  extends: 'kentcdodds/<config-name>',
}
```

Or in combination with the base config (recommended)

```javascript
module.exports = {
  extends: ['kentcdodds', 'kentcdodds/<config-name>'],
}
```

### Things to know

- All plugins needed for rules used by these configs are dependencies of this
  module so you don't have to install anything on your own.
- The default config actually is composed of several configurations and you can
  use those individually. You can use each of these configs yourself if you want
  to leave my own personal style out of it.

#### Example of customized config

```javascript
module.exports = {
  extends: ['kentcdodds/import', 'kentcdodds/jest'],
  rules: {
    /* custom rules */
  },
}
```

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://jonno.dev"><img src="https://avatars3.githubusercontent.com/u/1351912?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Haines</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=BarryThePenguin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/zack9433"><img src="https://avatars3.githubusercontent.com/u/1610642?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zack Yang</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=zack9433" title="Code">💻</a></td>
    <td align="center"><a href="https://mohamed3on.online/"><img src="https://avatars2.githubusercontent.com/u/12295159?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohamed Oun</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=Mohamed3on" title="Code">💻</a></td>
    <td align="center"><a href="https://alexandernanberg.com"><img src="https://avatars3.githubusercontent.com/u/8997319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexander Nanberg</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=alexandernanberg" title="Code">💻</a></td>
    <td align="center"><a href="https://huchen.dev"><img src="https://avatars3.githubusercontent.com/u/2078389?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hu Chen</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=huchenme" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/weyert"><img src="https://avatars3.githubusercontent.com/u/7049?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Weyert de Boer</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=weyert" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://ma.vu"><img src="https://avatars3.githubusercontent.com/u/3077558?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marko Vujanic</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=ultrox" title="Code">💻</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=MichaelDeBoey" title="Code">💻</a> <a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=MichaelDeBoey" title="Documentation">📖</a> <a href="#tool-MichaelDeBoey" title="Tools">🔧</a></td>
    <td align="center"><a href="https://www.justindorfman.com"><img src="https://avatars1.githubusercontent.com/u/398230?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Justin Dorfman</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=jdorfman" title="Documentation">📖</a></td>
    <td align="center"><a href="http://arvigeus.github.com"><img src="https://avatars2.githubusercontent.com/u/4872470?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikolay Stoynov</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=arvigeus" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.andrewm.codes"><img src="https://avatars1.githubusercontent.com/u/18423853?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Mason</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=andrewmcodes" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/benmonro"><img src="https://avatars3.githubusercontent.com/u/399236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben Monro</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=benmonro" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/silviuaavram"><img src="https://avatars.githubusercontent.com/u/11275392?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Silviu Alexandru Avram</b></sub></a><br /><a href="https://github.com/kentcdodds/eslint-config-kentcdodds/commits?author=silviuaavram" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/eslint-config-kentcdodds/validate?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/eslint-config-kentcdodds/actions?query=workflow%3Avalidate
[version-badge]: https://img.shields.io/npm/v/eslint-config-kentcdodds.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-kentcdodds
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-kentcdodds.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/eslint-config-kentcdodds
[license-badge]: https://img.shields.io/npm/l/eslint-config-kentcdodds.svg?style=flat-square
[license]: https://github.com/kentcdodds/eslint-config-kentcdodds/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/eslint-config-kentcdodds/blob/master/other/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://g.all-contributorsrcithub.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/kentcdodds/eslint-config-kentcdodds?color=orange&style=flat-square
[bugs]: https://github.com/kentcdodds/eslint-config-kentcdodds/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/kentcdodds/eslint-config-kentcdodds/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/kentcdodds/eslint-config-kentcdodds/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[eslint]: https://github.com/eslint/eslint
<!-- prettier-ignore-end -->
