# configs-og

[![NPM version](https://img.shields.io/npm/v/configs-og.svg?style=flat)](https://www.npmjs.com/package/eslint-config-prettier-og)
![NPM license](https://img.shields.io/npm/l/configs-og.svg?style=flat)
[![NPM total downloads](https://img.shields.io/npm/dt/configs-og.svg?style=flat)](https://npmcharts.com/compare/eslint-config-prettier-og?minimal=true)
[![NPM monthly downloads](https://img.shields.io/npm/dm/configs-og.svg?style=flat)](https://npmcharts.com/compare/eslint-config-prettier-og?minimal=true)

configurations for eslint, prettier, babel, husky, lint-staged

# Usage

1) Install dependency

    ```shell script
    npm install --save-dev configs-og
    ```

   and peerDependencies

    ```shell script
    npm install --save-dev @babel/core@7.* babel-eslint@10.* eslint@6.8.* husky@4.* lint-staged@10.* prettier@1.18.*
    ```

2) Add this in your package.json

    ```json
    "eslintConfig": {
      "extends": "./node_modules/configs-og/.eslintrc.js"
    },
    "prettier": "configs-og/prettier.config.js",
    "babel": {
      "extends": "configs-og/babel.config.js"
    },
    "husky": {
        "hooks": {
               "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.(js|jsx)": ["eslint --quiet"]
    }
    ```
