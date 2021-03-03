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
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        'import/extensions': ['.js', '.jsx'],
        react: {
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
            rules: {
                '@typescript-eslint/no-empty-function': 0,
                '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }]
            }
        }
    ],
    rules: {
        'no-prototype-builtins': 0,
        'no-unsafe-optional-chaining': 2,
        'array-callback-return': 2,
        eqeqeq: 2,
        'prettier/prettier': ['error'],
        'no-unused-vars': [2, { ignoreRestSiblings: true }],
        'no-use-before-define': 2,
        'prefer-const': 2,
        'import/namespace': [2, { allowComputed: true }],
        'import/no-self-import': 2,
        'import/no-cycle': 2,
        'import/no-useless-path-segments': 2,
        'import/no-extraneous-dependencies': 2,
        'import/first': 2,
        'import/no-duplicates': 2,
        'import/order': 2,
        'import/newline-after-import': 2,
        'react/display-name': 0,
        'react/no-find-dom-node': 0,
        'react/prop-types': [2, { skipUndeclared: true }],
        'react/no-typos': 2,
        'react/no-unused-prop-types': 2,
        'react/no-unused-state': 2,
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0
    }
};
