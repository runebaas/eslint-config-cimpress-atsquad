module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    'ecmaVersion': 2019,
  },
  plugins: [
    'import',
    'unicorn'
  ],
  extends: ['eslint:recommended'],
  rules: {
    /*
     * built-in eslint rules
     */
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-scoped-var': ['off'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': ['off'],
    'comma-dangle': ['error'],
    'comma-spacing': ['error'],
    'comma-style': ['error', 'last'],
    'complexity': ['off', 11],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': ['error'],
    'consistent-this': ['off', 'that'],
    'curly': ['error', 'all'],
    'default-case': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {
      'allowKeywords': true
    }],
    'eol-last': ['error'],
    'eqeqeq': ['error'],
    'func-names': ['off'],
    'func-style': ['off', 'declaration'],
    'generator-star-spacing': ['error', 'after'],
    'guard-for-in': ['off'],
    'handle-callback-err': ['off'],
    'id-length': ['off', {'min': 4}],
    'indent': ['error', 2, {'SwitchCase': 1, 'MemberExpression': 1}],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'max-depth': ['error', 4],
    'max-len': ['error', { 'code': 200, 'tabWidth': 2, 'ignoreStrings': true, 'ignoreUrls': true, 'ignoreTemplateLiterals': true, 'ignoreComments': true }],
    'max-nested-callbacks': ['off', 10],
    'max-params': ['off', 3],
    'max-statements': ['off', 4],
    'new-parens': ['error'],
    'newline-after-var': ['off'],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 10 }],
    'no-alert': ['error'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['off'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-catch-shadow': ['error'],
    'no-cond-assign': ['error'],
    'no-confusing-arrow': ['off'],
    'no-console': ['off'],
    'no-const-assign': ['error'],
    'no-constant-condition': ['error'],
    'no-continue': ['off'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-delete-var': ['error'],
    'no-div-regex': ['off'],
    'no-dupe-args': ['error'],
    'no-dupe-class-members': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error'],
    'no-else-return': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-eq-null': ['off'],
    'no-eval': ['error'],
    'no-ex-assign': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': ['off'],
    'no-extra-semi': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-func-assign': ['error'],
    'no-global-assign': ['error'],
    'no-implied-eval': ['error'],
    'no-inline-comments': ['off'],
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-mixed-requires': ['off', false],
    'no-mixed-spaces-and-tabs': ['error', false],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-multiple-empty-lines': ['error', {
      'max': 1
    }],
    'no-negated-in-lhs': ['error'],
    'no-nested-ternary': ['off'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-require': ['off'],
    'no-new-wrappers': ['error'],
    'no-obj-calls': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error'],
    'no-path-concat': ['off'],
    'no-plusplus': ['off'],
    'no-process-env': ['off'],
    'no-process-exit': ['off'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-regex-spaces': ['error'],
    'no-reserved-keys': ['off'],
    'no-restricted-modules': ['off'],
    'no-return-assign': ['off'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-compare': ['off'],
    'no-sequences': ['error'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-spaced-func': ['error'],
    'no-sparse-arrays': ['error'],
    'no-sync': ['error'],
    'no-ternary': ['off'],
    'no-throw-literal': ['error'],
    'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['off'],
    'no-underscore-dangle': ['error', { 'allow': ['_links', '_embedded'] }],
    'no-unneeded-ternary': ['error'],
    'no-unreachable': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used'
    }],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-escape': ['error'],
    'no-var': ['error'],
    'no-void': ['off'],
    'no-warning-comments': ['off', {
      'terms': ['todo', 'fixme', 'xxx'],
      'location': 'start'
    }],
    'no-whitespace-before-property': ['error'],
    'no-with': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'methods', { 'avoidQuotes': true, 'avoidExplicitReturnArrows': true }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['off', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'prefer-template': ['error'],
    'quote-props': ['error', 'consistent-as-needed', { 'numbers': false }],
    'radix': ['off'],
    'require-await': ['error'],
    'semi': ['error'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],
    'space-before-blocks': ['error', 'always'],
    'space-in-brackets': [
      'off', 'never', {
        'singleValue': true,
        'arraysInArrays': false,
        'arraysInObjects': false,
        'objectsInArrays': true,
        'objectsInObjects': true,
        'propertyName': false
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false
    }],
    'spaced-line-comment': ['off', 'always'],
    'spaced-comment': ['error', 'always'],
    'strict': 0,
    'template-curly-spacing': ['error', 'never'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['off'],
    'valid-typeof': ['error'],
    'vars-on-top': ['off'],
    'wrap-iife': ['error'],
    'wrap-regex': ['error'],
    'yoda': ['error', 'never', {
      'exceptRange': true
    }],

    /*
     * eslint-plugin-import
     * https://github.com/benmosher/eslint-plugin-import
     */
    'import/no-default-export': ['error'],
    'import/first': ['error'],
    'import/no-duplicates': ['error'],
    'import/newline-after-import': ['error'],
    'import/no-self-import': ['error'],
    'import/no-useless-path-segments': ['error'],

    /*
     * eslint-plugin-unicorn
     * https://github.com/sindresorhus/eslint-plugin-unicorn
     */
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error'
      }
    ],
    'unicorn/error-message': ['error'],
    'unicorn/explicit-length-check': ['error'],
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase'
      }
    ],
    'unicorn/no-array-instanceof': ['error'],
    'unicorn/no-for-loop': ['error'],
    'unicorn/no-unsafe-regex': ['error'],
    'unicorn/no-unused-properties': ['warn'],
    'unicorn/no-zero-fractions': ['error'],
    'unicorn/prefer-exponentiation-operator': ['error'],
    'unicorn/prefer-includes': ['error'],
    'unicorn/prefer-spread': ['error'],
    'unicorn/prefer-starts-ends-with': ['error'],
    'unicorn/regex-shorthand': ['warn'],
    'unicorn/throw-new-error': ['error'],
  }
};
