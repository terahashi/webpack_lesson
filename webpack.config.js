

// ⬇︎nodejsに入っているpathライブラリを追加する。
// ⬇︎Live Reload(自動更新)
const path = require('path');

// ⬇︎mini-css-extract-pluginを追加する。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//⬇︎html-webpack-pluginを追加する。
const HtmlWebpackPlugin = require('html-webpack-plugin');
//⬇︎clean-webpack-pluginを追加する。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');








//部品を出力する(module.exports)
//path.resolveで絶対パスを取得することができる。
module.exports = {
    // ⬇︎--mode developmentコマンドを短縮できる
    // npx webpackで実行できる。
    mode: 'development',

    // ⬇︎jsソースマップ
    devtool: 'source-map',

    //jsのentry場所とoutput場所
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[contenthash].js',
    },

    // ⬇︎Live Reload(編集したらブラウザを自動更新)
    devServer: {
        static: path.resolve(__dirname, 'src'),
     },



    module: {
        rules: [
            // ⬇︎babel設定
            {
            test: /\.js/,
            exclude: /node_modules/,
            use: [
                {
                    //⬇︎babelを利用する
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            //⬇︎React(babel/preset-react)を利用する
                            '@babel/preset-react',
                        ],
                    },
                },
            ],
            },

            //⬇︎css-loader sass-loader MiniCssExtraPlugin
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        // ⬇︎sourceMap
                        options:{
                            sourceMap: true,
                        },
                    },
                    //⬇︎sass-loader
                    {
                        loader: 'sass-loader',
                    },
                ],
            },

            //⬇︎Asset Modules(webpack5の標準画像loader：便利)
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource',
                generator:{
                    filename: 'images/[name]-[contenthash].[ext]',
                },

                //⬇︎(画像自動軽量化)image-webpack-loader
                use:[
                    {
                        loader: 'image-webpack-loader',
                        options:{
                            mozjpeg:{
                                progressive: true,
                                quality: 15,
                            },
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
            filename: './css/[name]-[contenthash].css',
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


