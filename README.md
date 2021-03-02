# Configs OG

[![NPM version](https://img.shields.io/npm/v/configs-og.svg?style=flat)](https://www.npmjs.com/package/eslint-config-prettier-og)
![NPM license](https://img.shields.io/npm/l/configs-og.svg?style=flat)
[![NPM total downloads](https://img.shields.io/npm/dt/configs-og.svg?style=flat)](https://npmcharts.com/compare/eslint-config-prettier-og?minimal=true)
[![NPM monthly downloads](https://img.shields.io/npm/dm/configs-og.svg?style=flat)](https://npmcharts.com/compare/eslint-config-prettier-og?minimal=true)

## Eslint, Prettier, Babel, Husky, lint-staged configurations for JavaScript Frontend environment

## Getting Started

- ### Installation:

    ```shell script
    npm install --save-dev configs-og
    ```

- ### Configuration:
    - Add this in your **package.json** for Eslint, Prettier, Husky and lintStaged

        ```json
        "scripts": {
            "lint": "eslint --quiet .",
            "lint:fix": "eslint --quiet --fix ."
        },
        "eslintConfig": {
          "extends": "./node_modules/configs-og/config-.eslintrc.js"
        },
        "prettier": "configs-og/config-prettier.config.js",
        "lint-staged": {
            "*.(js|jsx)": ["eslint --quiet"]
        }
        ```

    - Create **config-babel.config.js** in root directory with this config
    
        ```javascript
        module.exports = {
            presets: ['configs-og/config-babel.config.js']
        };
        ```

## Custom configuration for Eslint, Prettier

- ### Eslint
    Create **config-.eslintrc.js** in root directory with this config
    
    ```javascript
    module.exports = {
        extends: ['./node_modules/configs-og/config-.eslintrc.js'],
        // configuration
    };
    ```

- ### Prettier
    Create **config-prettier.config.js** in root directory with this config
    
    ```javascript
    module.exports = {
        ...require("configs-og/config-prettier.config.js"),
        // configuration
    };
    ```
