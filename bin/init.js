#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const path = require('path');
const execSync = require('child_process').execSync;

const pkg = require(path.resolve('package.json'));

execSync('npm install --save-dev configs-og eslint@7.* prettier@2.*');

const promises = [];

const configs = [
    {
        key: 'scripts',
        value: {
            ...(pkg.scripts || {}),
            lint: 'eslint --quiet .',
            'lint:fix': 'eslint --quiet --fix .'
        }
    },
    {
        key: 'eslintConfig',
        value: { extends: ['./node_modules/configs-og/.eslintrc.js'] }
    },
    {
        key: 'prettier',
        value: 'configs-og/prettier.config.js'
    }
];

configs.forEach(({ key, value }) => {
    if (pkg[key]) {
        console.error(`Error: ${key} is exists, you should add config manually`);
    } else {
        pkg[key] = value;
    }
});

console.log('Init...');

promises.push(
    fs.writeFile(path.resolve('package.json'), JSON.stringify(pkg, null, 2)).catch((error) => {
        if (error) {
            console.error("Error: can't write package.json, you should add config manually");
        }
    })
);

const files = ['.eslintignore', '.gitignore'];

files.forEach((filename) => {
    promises.push(
        fs
            .copyFile(path.join(__dirname, filename), path.resolve(filename), fs.constants.COPYFILE_EXCL)
            .catch((error) => {
                if (error) {
                    console.error(`Error: can't write ${filename}, you should add config manually`);
                }
            })
    );
});

Promise.all(promises).then(() => {
    execSync('npx mrm@2 lint-staged');

    console.log('...Done');
});
