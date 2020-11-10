module.exports = {
  extends: ['../react.js', '../jsx-a11y.js', '../index.js'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './.tsconfig.json',
      },
    },
  ],
}
