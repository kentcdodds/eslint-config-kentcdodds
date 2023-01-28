const readPkgUp = require('read-pkg-up')
const semver = require('semver')

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

let oldestSupportedReactVersion = '16.5.2'

let hasPropTypes = false
try {
  const pkg = readPkgUp.sync({normalize: true})
  // eslint-disable-next-line prefer-object-spread
  const allDeps = Object.assign(
    {react: '16.5.2'},
    pkg.peerDependencies,
    pkg.devDependencies,
    pkg.dependencies,
  )
  hasPropTypes = allDeps.hasOwnProp('prop-types')
  oldestSupportedReactVersion = semver
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semver.compare)[0]
} catch (error) {
  // ignore error
}

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': hasPropTypes ? 'error' : 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': ['error', {ignoreTranspilerName: false}],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': hasPropTypes ? 'error' : 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/hook-use-state': 'off',
    'react/iframe-missing-sandbox': 'warn',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      {children: 'ignore', props: 'never'},
    ],
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': ['error', {validStrategies: ['ternary']}],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'off', // sometimes you don't care about the issues or they don't apply
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'off',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'warn', // if you need it there should be a comment explaining why
    'react/no-unstable-nested-components': ['error', {allowAsProps: true}],
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': hasPropTypes ? 'error' : 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'off',
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': hasPropTypes ? 'error' : 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off', // sometimes the default value is undefined so that's fine...
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',
    'react/sort-default-props': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          {extensions: ['.ts', '.tsx']},
        ],
        'react/prop-types': 'off',
      },
    },
  ],
}
