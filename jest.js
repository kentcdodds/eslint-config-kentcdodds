module.exports = {
  rules: {
    'max-len': [2, 240], // them verbose it statements
    'no-restricted-properties': [
      2,
      {
        object: 'test',
        property: 'only',
        message: "Jest's test.only should not be used as it skips all other tests in the file.",
      },
      {
        object: 'it',
        property: 'only',
        message: "Jest's it.only should not be used as it skips all other it blocks in the file.",
      },
      {
        object: 'describe',
        property: 'only',
        message: "Jest's describe.only should not be used as it skips all other describe blocks in the file.",
      },
    ],
  },
  env: {
    jest: true,
  },
}
