const readPkgUp = require('read-pkg-up')

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

let hasJestDom = false
let hasTestingLibrary = false

try {
  const {packageJson} = readPkgUp.sync({normalize: true})
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
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
  rules: {},
  overrides: [
    {
      files: [
        '**/__tests__/**/*.+(js|ts)?(x)',
        '**/*.{spec,test}.+(js|ts)?(x)',
      ],
      rules: {
        'react/display-name': 'off', // we don't need a display name in test files

        'jest/consistent-test-it': 'off',
        'jest/expect-expect': 'off',
        'jest/max-expects': 'off',
        'jest/max-nested-describe': 'error',
        'jest/no-alias-methods': 'off',
        'jest/no-commented-out-tests': 'warn',
        'jest/no-conditional-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'off',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'off',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': ['warn', {maxSize: 300}],
        'jest/no-mocks-import': 'error',
        'jest/no-restricted-matchers': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'off',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-each': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'off',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': 'off',
        'jest/prefer-mock-promise-shorthand': 'error',
        'jest/prefer-snapshot-hint': 'error',
        'jest/prefer-spy-on': 'off',
        'jest/prefer-strict-equal': 'off',
        'jest/prefer-to-be': 'off',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-hook': 'off',
        'jest/require-to-throw-message': 'off',
        'jest/require-top-level-describe': 'off',
        'jest/unbound-method': 'off',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'warn',

        ...(hasJestDom
          ? {
              'jest-dom/prefer-checked': 'error',
              'jest-dom/prefer-empty': 'error',
              'jest-dom/prefer-enabled-disabled': 'error',
              'jest-dom/prefer-focus': 'error',
              'jest-dom/prefer-in-document': 'error',
              'jest-dom/prefer-required': 'error',
              'jest-dom/prefer-to-have-attribute': 'error',
              'jest-dom/prefer-to-have-class': 'error',
              'jest-dom/prefer-to-have-style': 'error',
              'jest-dom/prefer-to-have-text-content': 'error',
              'jest-dom/prefer-to-have-value': 'error',
            }
          : null),

        ...(hasTestingLibrary
          ? {
              'testing-library/await-async-query': 'error',
              'testing-library/await-async-utils': 'error',
              'testing-library/await-fire-event': 'off',
              'testing-library/consistent-data-testid': 'off',
              'testing-library/no-await-sync-events': 'error',
              'testing-library/no-await-sync-query': 'error',
              'testing-library/no-container': 'error',
              'testing-library/no-debugging-utils': 'error',
              'testing-library/no-dom-import': ['error', 'react'],
              'testing-library/no-global-regexp-flag-in-query': 'error',
              'testing-library/no-manual-cleanup': 'error',
              'testing-library/no-node-access': 'error',
              'testing-library/no-promise-in-fire-event': 'error',
              'testing-library/no-render-in-setup': 'error',
              'testing-library/no-unnecessary-act': 'error',
              'testing-library/no-wait-for-empty-callback': 'error',
              'testing-library/no-wait-for-multiple-assertions': 'error',
              'testing-library/no-wait-for-side-effects': 'error',
              'testing-library/no-wait-for-snapshot': 'error',
              'testing-library/prefer-explicit-assert': 'warn',
              'testing-library/prefer-find-by': 'error',
              'testing-library/prefer-presence-queries': 'error',
              'testing-library/prefer-query-by-disappearance': 'error',
              'testing-library/prefer-screen-queries': 'error',
              'testing-library/prefer-user-event': 'error',
              'testing-library/prefer-wait-for': 'error',
              'testing-library/render-result-naming-convention': 'error',
            }
          : null),
      },
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/*.{spec,test}.ts?(x)'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
}
