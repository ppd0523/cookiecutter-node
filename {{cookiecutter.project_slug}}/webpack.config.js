/**
 * Development 모드 옵션
 * npx webpack [serve] --env mode=development
 * 
 * Proudction 빌드 옵션
 * npx webpack --env mode=development
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env)=>{
    const FGRED = "\x1b[31m";
    const RESET = "\x1b[0m";
    if(!['development', 'production'].includes(env.mode)){
        console.error(`${FGRED}[ERROR]${RESET} mode MUST be${RESET} 'development' or 'production'`);
        return;
    }
    console.log(`---------- Build by ${FGRED}${env.mode}${RESET} ----------`);
    
    let _entry = {
        index: './src/index.js',
    };
    
    let _output = {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    };
    
    let _module = {
        rules: [
        //     {
        //         test: /\.m?js$/,
        //         include: [
        //             path.resolve(__dirname, 'src')
        //         ],
        //         exclude: /node_modules/,
        //         use: {
        //             loader: 'babel-loader',
        //             options:{
        //                 presets: ['@babel/preset-env']
        //             }
        //         },
        //     },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    };
    
    let _plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/base.html',
            showErrors: true,
            chunks: ['index', ],
            templateParameters: {
                title: 'index',
                lang: 'ko'
            }
        })
    ];

    let config = {
        entry: _entry,
        output: _output,
        module: _module,
        plugins: _plugins,
    }

    let isDev = env.mode.toLowerCase() === 'development' ? true: false;
    if(isDev){
        config.mode = 'development';
        config.devtool = 'eval-source-map';
        config.devServer = {
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            hot: true,
            inline: true,
            host: "127.0.0.1",
            port: 8080,
            proxy: {}
        };
    }
    else{
        config.mode = 'production';
        config.devServer = {
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            host: "127.0.0.1",
            port: 8080,
            proxy : {}
        }
    }
    
    return config;
}
