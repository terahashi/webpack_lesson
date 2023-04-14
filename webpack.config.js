
// nodejsに入っているpathライブラリを追加する。
const path = require('path');
// ⬇︎mini-css-extract-pluginを追加する。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//⬇︎html-webpack-pluginを追加する。
const HtmlWebpackPlugin = require('html-webpack-plugin');


//path.resolveで絶対パスを取得することができる。
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },

    // ⬇︎mini-css-extract-plugin
    // ⬇︎html-webpack-plugin
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

}


