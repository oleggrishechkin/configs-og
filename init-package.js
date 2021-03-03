const fs = require('fs');
const path = require('path');

const pkg = require(path.resolve('package.json'));

[
    {
        key: 'eslint',
        value: { extends: ['./node_modules/configs-og/.eslintrc.js'] }
    },
    {
        key: 'babel',
        value: { presets: ['configs-og/babel.config.js'] }
    },
    {
        key: 'prettier',
        value: 'configs-og/prettier.config.js'
    },
    {
        key: 'husky',
        value: {
            hooks: {
                'pre-commit': 'lint-staged'
            }
        }
    },
    {
        key: 'lint-staged',
        value: 'configs-og/lint-staged.config.js'
    }
].forEach(({ key, value }) => {
    if (pkg[key]) {
        console.error(`Error: can't write ${key}, you should add config manually`);
    } else {
        pkg[key] = value;
    }
});

fs.writeFile(path.resolve('package.json'), JSON.stringify(pkg, null, 2), (error) => {
    if (error) {
        console.error("Error: can't write package.json, you should add config manually");
    }
});

['config-.eslintignore', 'config-.gitignore'].forEach((configFilename) => {
    const filename = configFilename.slice(7);

    fs.copyFile(
        path.join(__dirname, 'configs', configFilename),
        path.resolve(filename),
        fs.constants.COPYFILE_EXCL,
        (error) => {
            if (error) {
                console.error(`Error: can't write ${filename}, you should add config manually`);
            }
        }
    );
});
