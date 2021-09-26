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
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        },
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
                '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
                'no-use-before-define': 0,
                '@typescript-eslint/no-use-before-define': 2
            }
        }
    ],
    rules: {
        'no-prototype-builtins': 0,
        'no-unsafe-optional-chaining': 2,
        'array-callback-return': 2,
        eqeqeq: 2,
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'break', 'continue']
            },
            {
                blankLine: 'always',
                prev: ['for', 'while', 'do', 'if', 'switch', 'try'],
                next: '*'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['for', 'while', 'do', 'if', 'switch', 'try']
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            }
        ],
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
        'react/jsx-uses-react': 0,
        'import/no-default-export': 2
    }
};
