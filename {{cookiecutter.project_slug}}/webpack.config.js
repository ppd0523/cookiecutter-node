const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        inline: true,
        host: "127.0.0.1",
        port: 8080
    },
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/base.html',
            chunks: ['index', ]
        })
    ]
}

console.log("Build by DEVELOPMENT");