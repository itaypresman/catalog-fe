const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const prod_conf = require('./prod');
const dev_conf = require('./dev');


const base_conf = {
    mode: process.env.mode,
    entry: ['babel-polyfill', path.resolve(__dirname, '../src/index.jsx')],

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: './bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
        ],
    },

    resolve: {
        alias: {
            '@lib': path.resolve(__dirname, '..', 'lib'),
            '@components': path.resolve(__dirname, '..', 'src', 'components'),
            '@stores': path.resolve(__dirname, '..', 'src', 'stores'),
        },
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            inject: false,
        }),
        new Dotenv({
            allowEmptyValues: true,
            systemvars: true,
        }),
    ],
};

module.exports = process.env.mode === 'production'
    ? merge(base_conf, prod_conf)
    : merge(base_conf, dev_conf);
