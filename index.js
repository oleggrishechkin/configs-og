module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
    plugins: ['import', 'react', 'react-hooks', 'prettier'],
    settings: {
        'import/extensions': ['.js', '.jsx'],
        react: {
            version: 'detect'
        }
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        worker: true,
        jest: true,
        serviceworker: true
    },
    rules: {
        'no-prototype-builtins': 0, // can used like Foo.hasOwnProperty
        'array-callback-return': 2,
        curly: 2, // if (...) some -> if (...) { some }
        'dot-notation': 2, // object['prop'] -> object.prop
        eqeqeq: 2,
        'no-else-return': 2,
        'no-param-reassign': 2,
        'no-return-await': 2,
        'no-useless-return': 2,
        'require-await': 2,
        'no-unused-vars': [2, { ignoreRestSiblings: true }], // except { unused, ...rest }
        'no-use-before-define': 2,
        'no-useless-computed-key': 2, // { 'prop': ... } -> { prop: ...}
        'no-var': 2,
        'object-shorthand': 2, // { prop: prop } -> { prop }
        'prefer-const': 2,
        'import/no-unresolved': 2,
        'import/named': 2,
        'import/default': 2,
        'import/namespace': 2,
        'import/no-self-import': 2,
        'import/no-cycle': 2,
        'import/no-useless-path-segments': 2,
        'import/export': 2,
        'import/no-extraneous-dependencies': 2,
        'import/first': 2,
        'import/no-duplicates': 2,
        'import/order': 2,
        'import/newline-after-import': 2,
        'react/display-name': 0, // used in HOC only
        'react/default-props-match-prop-types': 2,
        'react/no-find-dom-node': 0, // used in HOC
        'react/no-redundant-should-component-update': 2,
        'react/no-typos': 2,
        'react/no-unused-prop-types': 1, // can be used in HOC (in selectors)
        'react/no-unused-state': 2,
        'react/require-default-props': 2,
        'react/jsx-boolean-value': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1, // can ignore deps with []
        'prettier/prettier': 2
    }
};
