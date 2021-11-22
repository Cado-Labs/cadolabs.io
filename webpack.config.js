const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["file-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
    //     new HtmlWebpackPlugin({
    //     template: "./src/template.html",
    //     filename: 'admin.html'
    // }),
    ],

    // entry: {
    //     main: path.resolve(__dirname, './src/index.js'),
    // },
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: '[name].bundle.js',
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
    //             type: 'asset/resource',
    //         },
    //         {
    //             test: /\.(scss|css)$/,
    //             use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    //         },
    //         {
    //             test: /.s?css$/,
    //             use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    //         },
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: ['babel-loader'],
    //         },
    //     ],
    // },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new CssMinimizerPlugin(),
    //     ],
    // },
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new CopyPlugin({
    //         patterns: [
    //             { from: "./src/images/", to: "./images/" },
    //         ],
    //     }),
    //     new MiniCssExtractPlugin(),
    //
    // ],
    // mode: "production",
}
