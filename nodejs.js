module.exports = {
  env: {
    node: true
  },
  plugins: [
    'node',
    'security'
  ],
  extends: ['plugin:node/recommended', 'plugin:security/recommended'],
  rules: {
    'node/no-unpublished-require': ['off'],
    'node/no-unsupported-features/es-syntax': ['off']
  }
};
