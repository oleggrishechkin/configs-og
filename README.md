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
    
    - Add configs in **package.json** (Recommended)

      ```shell script
      node node_modules/configs-og/init-package.js
      ```

    - or add configs in separate files

      ```shell script
      node node_modules/configs-og/init.js
      ```

## Manual configuration

- ### Eslint
    Create **.eslintrc.js** in root directory with this [config](./configs/config-.eslintrc.js)
    
    ```javascript
    module.exports = {
        extends: ['./node_modules/configs-og/.eslintrc.js'],
        // configuration
    };
    ```
    
  (optional) Create **.eslintignore** in root directory with this [content](./configs/config-.eslintignore)

- ### Babel
    Create **babel.config.js** in root directory with this [config](./configs/config-babel.config.js)

    ```javascript
    module.exports = {
        presets: ['configs-og/babel.config.js'],
        // configuration
    };
    ```

- ### Prettier
    Create **prettier.config.js** in root directory with this [config](./configs/config-prettier.config.js)
    
    ```javascript
    module.exports = {
        ...require('./node_modules/configs-og/prettier.config.js'),
        // configuration
    };
    ```

- ### Husky
    Create **husky.config.js** in root directory with this [config](./configs/config-husky.config.js)

    ```javascript
    module.exports = {
        ...require('./node_modules/configs-og/husky.config.js'),
        // configuration
    };
    ```

- ### lint-staged
    Create **lint-staged.config.js** in root directory with this [config](./configs/config-lint-staged.config.js)

    ```javascript
    module.exports = {
        ...require('./node_modules/configs-og/lint-staged.config.js'),
        // configuration
    };
    ```

- ### (optional) .gitignore
    Create **.gitignore** in root directory with this [content](./configs/config-.gitignore)

- ### (optional) Scripts
    Add this in your **package.json** for Eslint

   ```json
   "scripts": {
       "lint": "eslint --quiet .",
       "lint:fix": "eslint --quiet --fix ."
   }
   ```