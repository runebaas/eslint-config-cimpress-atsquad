# ESLint Config Cimpress AT Squad
[![Build Status](https://travis-ci.org/Cimpress-MCP/eslint-config-cimpress-atsquad.svg?branch=master)](https://travis-ci.org/Cimpress-MCP/eslint-config-cimpress-atsquad)
[![npm version](https://badge.fury.io/js/eslint-config-cimpress-atsquad.svg)](https://www.npmjs.com/package/eslint-config-cimpress-atsquad)

A set of opinionated ESLint rules from the AT Squad at Cimpress.

## Usage
1. `yarn add -D eslint eslint-config-cimpress-atsquad`
2. create a file named `.eslintrc` in your project:

```json
{
  "extends": ["cimpress-atsquad/base", "cimpress-atsquad/nodejs"]
}
```

## Modules
This package is completely modular and you can include whatever you need. All dependencies are `peerDependencies`

### `cimpress-atsquad/base`
This module contains the base rules for all projects

required packages: `eslint-plugin-import eslint-plugin-unicorn`

### `cimpress-atsquad/nodejs`
Add this module if you are writing a nodejs project

required packages: `eslint-plugin-node eslint-plugin-security`

### `cimpress-atsquad/typescript`
Add this module if you are using typescript. This will set the appropriate parser and parser settings for typescript.

required packages: `@typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript`

### `cimpress-atsquad/vue`
Add this module if you are writing a vue project. This will set the appropriate parser and parser settings for a vue project.

required packages: `@vue/cli-plugin-eslint`

### `cimpress-atsquad/react`
Add this module if you are writing a react project. This will enable the jsx feature in parser options.

This module also includes accessability rules from the [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) plugin.

required packages: `eslint-plugin-react eslint-plugin-jsx-a11y`

### `cimpress-atsquad/jest`
Add this module if you are working with jest for unit testing.

required packages: `eslint-plugin-jest`

### `cimpress-atsquad/mocha`
Add this module if you are working with mocha for unit testing.

required packages: `eslint-plugin-mocha`

### `cimpress-atsquad/legacy`
these are the legacy rules used in version 1.0.67 of this package, you can include this on older projects before migrating to version 2

This is not meant to be combined with any other parts of this package.

required packages: `eslint-plugin-mocha eslint-plugin-node eslint-plugin-promise`

## Migration from 1.x

As written in the above module, after upgrading to 2.0 you have to install all required packages explicitly

```bash
yarn install -D eslint eslint-plugin-mocha eslint-plugin-node eslint-plugin-promise
```

and change your `.eslintrc` file to extend `cimpress-atsquad/legacy` instead of just `cimpress-atsquad`

## License

[Apache License 2.0](./LICENSE)
