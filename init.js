const fs = require('fs');
const path = require('path');

[
    'config-.eslintignore',
    'config-.eslintrc.js',
    'config-.gitignore',
    'config-babel.config.js',
    'config-husky.config.js',
    'config-lint-staged.config.js',
    'config-prettier.config.js'
].forEach((configFilename) => {
    const filename = configFilename.slice(7);

    fs.copyFile(
        path.join(__dirname, 'configs', configFilename),
        path.resolve(filename),
        fs.constants.COPYFILE_EXCL,
        (error) => {
            if (error) {
                console.log(`${filename} is already exists, you should add config manually`);
            }
        }
    );
});
