# Configs OG

[![NPM version](https://img.shields.io/npm/v/configs-og.svg?style=flat)](https://www.npmjs.com/package/eslint-config-prettier-og)
![NPM license](https://img.shields.io/npm/l/configs-og.svg?style=flat)
[![NPM total downloads](https://img.shields.io/npm/dt/configs-og.svg?style=flat)](https://npmcharts.com/compare/eslint-config-prettier-og?minimal=true)
[![NPM monthly downloads](https://img.shields.io/npm/dm/configs-og.svg?style=flat)](https://npmcharts.com/compare/eslint-config-prettier-og?minimal=true)

## Eslint, Prettier configurations for JavaScript Frontend environment

## Getting Started

- ### Installation:

    ```shell script
    npx configs-og
    ```

- ### Updating:

    ```shell script
    npm install configs-og@latest
    ```

## Manual configuration

- ### Eslint
    Create **.eslintrc.js** in root directory with this config:
    
    ```javascript
    module.exports = {
        extends: ['./node_modules/configs-og/.eslintrc.js'],
        // configuration
    };
    ```
    
  (optional) Create **.eslintignore** in root directory with this [content](./.eslintignore)

- ### Prettier
    Create **prettier.config.js** in root directory with this config:
    
    ```javascript
    module.exports = {
        ...require('./node_modules/configs-og/prettier.config.js'),
        // configuration
    };
    ```

- ### (optional) .gitignore
    Create **.gitignore** in root directory with this [content](./.gitignore)

- ### (optional) Scripts
    Add this to your **package.json**:

   ```json
   {
       "scripts": {
           "lint": "eslint --quiet .",
           "lint:fix": "eslint --quiet --fix .",
           "prettier:fix": "prettier --write ." 
       }
   }
   ```
