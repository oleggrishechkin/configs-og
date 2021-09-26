#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const path = require('path');
const execSync = require('child_process').execSync;
const COPYFILE_EXCL = require('fs').constants.COPYFILE_EXCL;

console.log('Install dependencies...');

execSync('npm install --save-dev configs-og eslint@7.* prettier@2.*');

console.log('Add scripts...');

let pkg = require(path.resolve('package.json'));

const promises = [];

const scripts = [
    {
        key: 'lint',
        value: 'eslint --quiet .'
    },
    {
        key: 'lint:fix',
        value: 'eslint --quiet --fix .'
    },
    {
        key: 'prettier:fix',
        value: 'prettier --write .'
    }
];

if (!pkg.scripts) {
    pkg.scripts = {};
}

scripts.forEach(({ key, value }) => {
    if (pkg.scripts[key]) {
        console.error(`Error: script ${key} is exists, you should add script manually`);
    } else {
        pkg.scripts[key] = value;
    }
});

console.log('Add configs...');

const configs = [
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
        console.error(`Error: config ${key} is exists, you should add config manually`);
    } else {
        pkg[key] = value;
    }
});

promises.push(
    fs.writeFile(path.resolve('package.json'), JSON.stringify(pkg, null, 2)).catch((error) => {
        if (error) {
            console.error("Error: can't write package.json, you should add config manually");
        }
    })
);

const files = ['copy-.eslintignore', 'copy-.gitignore'];

files.forEach((copyFilename) => {
    const filename = copyFilename.slice(5);

    promises.push(
        fs.copyFile(path.join(__dirname, copyFilename), path.resolve(filename), COPYFILE_EXCL).catch((error) => {
            if (error) {
                console.error(`Error: can't write ${filename}, you should add config manually`);
            }
        })
    );
});

Promise.all(promises).then(() => {
    console.log('Setup lint-staged...');

    execSync('npx mrm@2 lint-staged');

    pkg = require(path.resolve('package.json'));

    pkg['lint-staged'] = {
        '*.(js|jsx|ts|tsx)': 'eslint --quiet'
    };

    promises.push(
        fs.writeFile(path.resolve('package.json'), JSON.stringify(pkg, null, 2)).catch((error) => {
            if (error) {
                console.error("Error: can't write package.json, you should add config manually");
            }
        })
    );

    console.log('Done.');
});
