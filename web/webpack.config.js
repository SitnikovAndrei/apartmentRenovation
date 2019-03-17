const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output:
    {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:
    {
        contentBase: './dist'
    },
    mode: 'development',
    module:
    {
        rules: [
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
            {
                loader: 'file-loader',
                options:
                {},
            }],
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        // new webpack.ProvidePlugin(
        // {
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};