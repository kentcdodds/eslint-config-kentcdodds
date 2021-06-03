module.exports = {
  extends: ['../react.js', '../jsx-a11y.js', '../index.js', '../jest.js'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./.tsconfig.json'),
      },
    },
  ],
}
