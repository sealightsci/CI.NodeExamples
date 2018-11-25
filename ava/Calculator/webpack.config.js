var path = require('path');

module.exports = {
    entry: './src/calculator.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "@ava/stage-4",
                        "@ava/transform-test-files"
                        ]
                }
            }
        ]
    },
    devtool: 'source-map'
};
