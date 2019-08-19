module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'ecmaVersion': 2018
  },
  env: {
    browser: true
  },
  plugins: [
    'vue'
  ],
  extends: [
    'plugin:vue/essential'
  ]
};
