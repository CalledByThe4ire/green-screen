module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  printWidth: 80,
  semi: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false
      }
    }
  ]
};
