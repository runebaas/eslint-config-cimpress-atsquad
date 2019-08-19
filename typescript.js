module.exports = {
  extends: [
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: false,
    useJSXTextNode: false,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-typescript': true
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-type-alias': ['warn'],
    '@typescript-eslint/type-annotation-spacing': ['error', { 'after': true }],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/no-parameter-properties': ['error']
  }
};
