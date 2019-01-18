module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin: vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 1,
    'indent': [2, 2],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}