module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ]
}
