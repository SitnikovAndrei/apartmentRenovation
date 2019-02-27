const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            use: ExtractTextPlugin.extract(
            {
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
            {
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
            {
                loader: 'file-loader',
                options:
                {},
            }, ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
};