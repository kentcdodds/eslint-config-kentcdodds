const readPkgUp = require('read-pkg-up')

let hasJestDom = false
let hasTestingLibrary = false

try {
  const pkg = readPkgUp.sync({normalize: true})
  const allDeps = Object.keys({
    ...pkg.peerDependencies,
    ...pkg.devDependencies,
    ...pkg.dependencies,
  })

  hasJestDom = allDeps.includes('@testing-library/jest-dom')
  hasTestingLibrary = [
    '@testing-library/dom',
    '@testing-library/react',
    '@testing-library/angular',
    '@testing-library/vue',
  ].some(dependency => allDeps.includes(dependency))
} catch (error) {
  // ignore error
}

module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
    hasJestDom ? 'jest-dom' : null,
    hasTestingLibrary ? 'testing-library' : null,
  ].filter(Boolean),
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jest/no-alias-methods': 'off',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', {maxSize: 300}],
    'jest/no-test-prefixes': 'error',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/consistent-test-it': 'off',
    'jest/lowercase-name': 'off',
    'jest/no-deprecated-functions': 'error',
    'jest/no-hooks': 'off',
    'jest/no-jasmine-globals': 'off',
    'jest/no-test-callback': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-to-be-null': 'off',
    'jest/prefer-to-be-undefined': 'off',
    'jest/require-to-throw-message': 'off',
    'jest/expect-expect': 'off',
    'jest/no-test-return-statement': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-todo': 'warn',
    'jest/prefer-called-with': 'error',
    'jest/no-truthy-falsy': 'off',
    'jest/no-mocks-import': 'error',
    'jest/no-commented-out-tests': 'warn',
    'jest/no-duplicate-hooks': 'off',
    'jest/no-expect-resolves': 'off',
    'jest/no-export': 'error',
    'jest/no-if': 'error',
    'jest/no-standalone-expect': 'off',
    'jest/no-try-expect': 'error',
    'jest/require-top-level-describe': 'off',
    'jest/prefer-hooks-on-top': 'error',
    'jest/valid-title': 'warn',

    ...(hasJestDom
      ? {
          'jest-dom/prefer-checked': 'error',
          'jest-dom/prefer-empty': 'error',
          'jest-dom/prefer-enabled-disabled': 'error',
          'jest-dom/prefer-focus': 'error',
          'jest-dom/prefer-required': 'error',
          'jest-dom/prefer-to-have-attribute': 'error',
          'jest-dom/prefer-to-have-text-content': 'error',
        }
      : null),

    ...(hasTestingLibrary
      ? {
          'testing-library/await-async-query': 'error',
          'testing-library/await-async-utils': 'error',
          'testing-library/await-fire-event': 'off',
          'testing-library/consistent-data-testid': 'off',
          'testing-library/no-await-sync-query': 'error',
          'testing-library/no-debug': 'error',
          'testing-library/no-dom-import': ['error', 'react'],
          'testing-library/no-manual-cleanup': 'error',
          'testing-library/no-wait-for-empty-callback': 'error',
          'testing-library/prefer-explicit-assert': 'warn',
          'testing-library/prefer-presence-queries': 'error',
          'testing-library/prefer-screen-queries': 'error',
          'testing-library/prefer-wait-for': 'error',
        }
      : null),
  },
}
