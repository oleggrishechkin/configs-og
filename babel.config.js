module.exports = function(api) {
    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = [
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', { loose: false }],
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
