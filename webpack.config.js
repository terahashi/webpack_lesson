
// nodejsに入っているpathライブラリを使用する。
const path = require('path');

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
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
}


