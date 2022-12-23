module.exports = {
  env: {
    node: true,
    "jest/globals": true
  },
  globals: {
    expect: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'clean-code',
    'prettier',
    'jest'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    "prettier/prettier": 2
  }
};
