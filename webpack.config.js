const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
            '.jsx',
            '.json',
        ],
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // TypeScript
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            // CSS modules
            {
                test: /\.module\.\w+$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                            },
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack SolidJS Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // template file
            filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
    ],
}
