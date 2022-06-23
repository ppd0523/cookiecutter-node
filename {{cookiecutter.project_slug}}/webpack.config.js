const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, 'src', 'index.ts'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.json', 'css', 'scss', '.html']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            },
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: '',
            templateParameters: {},
            minify: false,
            meta: {},
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'static'),
            publicPath: '/static/'
        },
        hot: true,
        port: 3000,
        watchFiles: ['./src/**/*'],
        allowedHosts: 'all',
    },
    target: 'web',
}
