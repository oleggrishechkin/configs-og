module.exports = function (api) {
    const presets = [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ]
    ];
    const plugins = [
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-transform-runtime'
    ];

    if (api.env('production')) {
        plugins.push('babel-plugin-transform-react-remove-prop-types');
    }

    if (api.env('test')) {
        plugins.push('babel-plugin-dynamic-import-node');
    }

    return {
        presets,
        plugins
    };
};
