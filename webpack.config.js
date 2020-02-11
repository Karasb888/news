const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

const publicPath = process.env.NODE_ENV === 'production' ? '/news/dist/' : '/dist/';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.js$/,
                loaders: ['eslint-loader'],
                include: [
                  path.resolve(__dirname, 'src/'),
                ],
            },
            {
                test: /\.scss$/, 
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
                    },
                    require.resolve('sass-loader'),
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [ autoprefixer ]
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({})
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [ path.resolve(__dirname, 'dist/') ]
        })
    ]
};
