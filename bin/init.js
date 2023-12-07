#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const path = require('path');
const execSync = require('child_process').execSync;
const COPYFILE_EXCL = require('fs').constants.COPYFILE_EXCL;

console.log('[configs-og]: Install dependencies...');

execSync('npm install --save-dev configs-og@latest eslint@8.* prettier@3.* husky@8.* lint-staged@15.*');

console.log('[configs-og]: Add scripts...');

const pkg = require(path.resolve('package.json'));

const promises = [];

const scripts = [
    {
        key: 'lint',
        value: 'eslint --quiet .',
    },
    {
        key: 'lint:fix',
        value: 'eslint --quiet --fix .',
    },
    {
        key: 'prettier:fix',
        value: 'prettier --write .',
    },
    {
        key: 'prepare',
        value: 'husky install',
    },
];

if (!pkg.scripts) {
    pkg.scripts = {};
}

scripts.forEach(({ key, value }) => {
    if (pkg.scripts[key]) {
        console.error(`[configs-og]: Error: script ${key} is exists, you should add script manually`);
    } else {
        pkg.scripts[key] = value;
    }
});

console.log('[configs-og]: Add configs...');

const configs = [
    {
        key: 'eslintConfig',
        value: { extends: ['./node_modules/configs-og/.eslintrc.js'] },
    },
    {
        key: 'prettier',
        value: 'configs-og/prettier.config.js',
    },
    {
        key: 'lint-staged',
        value: {
            '*.(js|jsx|ts|tsx)': 'eslint --quiet',
        },
    },
];

configs.forEach(({ key, value }) => {
    if (pkg[key]) {
        console.error(`[configs-og]: Error: config ${key} is exists, you should add config manually`);
    } else {
        pkg[key] = value;
    }
});

promises.push(
    fs.writeFile(path.resolve('package.json'), JSON.stringify(pkg, null, 2)).catch((error) => {
        if (error) {
            console.error("[configs-og]: Error: can't write package.json, you should add config manually");
        }
    }),
);

console.log('[configs-og]: Add ignore files...');

const files = ['copy-.eslintignore', 'copy-.gitignore'];

files.forEach((copyFilename) => {
    const filename = copyFilename.slice(5);

    promises.push(
        fs.copyFile(path.join(__dirname, '..', copyFilename), path.resolve(filename), COPYFILE_EXCL).catch((error) => {
            if (error) {
                console.error(`[configs-og]: Error: can't write ${filename}, you should add config manually`);
            }
        }),
    );
});

Promise.all(promises).then(() => {
    console.log('[configs-og]: Add husky...');

    execSync('npm run prepare');
    execSync('npx husky add .husky/pre-commit "lint-staged"');

    console.log('[configs-og]: Done.');
});
