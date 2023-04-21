

// ⬇︎nodejsに入っているpathライブラリを追加する。
// ⬇︎Live Reload(自動更新)
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

    // ⬇︎Live Reload(自動更新)
    devServer: {
        static: path.resolve(__dirname, 'src'),
     },

    module: {
        rules: [

            //⬇︎css-loader
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    //⬇︎sass-loader
                    {
                        loader: 'sass-loader',
                    },
                ],
            },


            //⬇︎Asset Modules(webpack5の標準画像loader：便利)
            {
                test: /\.(png|jpg)/,
                type: 'asset/resource',
                generator:{
                    filename: 'images/[name][ext]',
                },
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

        //index.html
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html',
        }),
        //about.html
        new HtmlWebpackPlugin({
            template: './src/template/about.html',
            filename: 'about.html',
        }),

        new CleanWebpackPlugin(),
    ],

}


