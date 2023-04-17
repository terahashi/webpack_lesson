
// nodejsに入っているpathライブラリを追加する。
const path = require('path');
// ⬇︎mini-css-extract-pluginを追加する。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//⬇︎html-webpack-pluginを追加する。
const HtmlWebpackPlugin = require('html-webpack-plugin');
//⬇︎clean-webpack-pluginを追加する。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');





//path.resolveで絶対パスを取得することができる。
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/main.js',
    },


    module: {
        rules: [

            //⬇︎css-loader
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

            //⬇︎file-loader(画像のloader)
            {
                test: /\.(png|jpg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },

    ],
    },


    // ⬇︎mini-css-extract-plugin
    // ⬇︎html-webpack-plugin
    // ⬇︎clean-webpack-plugin
    plugins:[
        new MiniCssExtractPlugin({
            filename: './css/main.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
        new CleanWebpackPlugin(),
    ],


}


