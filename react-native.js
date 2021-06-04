const readPkgUp = require('read-pkg-up')

let hasReactNative = false

try {
  const {packageJson} = readPkgUp.sync({normalize: true})
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  })

  hasReactNative = ['react-native', 'expo'].some(dependency =>
    allDeps.includes(dependency),
  )
} catch (error) {
  // ignore error
}

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [hasReactNative ? 'react-native' : null].filter(Boolean),
  rules: {
    ...(hasReactNative
      ? {
          'react-native/no-unused-styles': 'error',
          'react-native/split-platform-components': 'error',
          'react-native/no-inline-styles': 'error',
          'react-native/no-color-literals': 'error',
          'react-native/no-raw-text': 'error',
          'react-native/sort-styles': 'off',
        }
      : null),
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        ...(hasReactNative
          ? {
              // avoid errors from styles that are defined outside the component, common patter in RN
              '@typescript-eslint/no-use-before-define': [
                'error',
                {functions: false, classes: true, variables: false},
              ],
            }
          : null),
      },
    },
  ],
}
