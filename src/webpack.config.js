var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        // Resolvable extensions.
        extensions: ["", ".js", ".css"]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
        }),
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};