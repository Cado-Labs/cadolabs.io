const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templates = [
    { template: './src/about_us.html', filename: './index.html'},
    { template: './src/careers.html', filename: './careers.html'},
    { template: './src/vacancy.html', filename: './vacancy.html'},
    { template: './src/contact.html', filename: './contact.html'},
    { template: './src/privacy.html', filename: './privacy.html'},
    { template: './src/cookie-policy.html', filename: './cookie-policy.html'},
    { template: './src/tech-radar.html', filename: './tech-radar.html'},
];


module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: "."} },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'resolve-url-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: "asset",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]',
                },
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./src/images/", to: "./images/" },
                { from: "./src/robots.txt",  to: "robots.txt", toType: "file", },
                { from: "./src/manifest.json",  to: "manifest.json", toType: "file", },
            ],
        }),
        new MiniCssExtractPlugin({filename: "[name].css"}),
        ...templates.map(template => new HtmlWebpackPlugin(template)),
    ],
}
