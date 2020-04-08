module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    plugins: ['react', 'react-hooks', 'import', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/extensions': ['.js', '.jsx'],
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
    rules: {
        'no-prototype-builtins': 0,
        'array-callback-return': 2,
        eqeqeq: 2,
        'no-param-reassign': 2,
        'no-unused-vars': [2, { ignoreRestSiblings: true }],
        'no-use-before-define': 2,
        'prefer-const': 2,
        'react/display-name': 0,
        'react/default-props-match-prop-types': 2,
        'react/no-find-dom-node': 0,
        "react/prop-types": [2, { skipUndeclared: true }],
        'react/no-typos': 2,
        'react/no-unused-prop-types': 2,
        'react/no-unused-state': 2,
        'react/require-default-props': [2, { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'import/no-unresolved': 2,
        'import/named': 2,
        'import/default': 2,
        "import/namespace": [2, { allowComputed: true }],
        'import/no-self-import': 2,
        'import/no-cycle': 2,
        'import/no-useless-path-segments': 2,
        'import/export': 2,
        'import/no-extraneous-dependencies': 2,
        'import/first': 2,
        'import/no-duplicates': 2,
        'import/order': 2,
        'import/newline-after-import': 2,
        'prettier/prettier': 2,
    }
};
