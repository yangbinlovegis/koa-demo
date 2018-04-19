const path = require('path'); //此处使用ES6的语法，需要将文件名改为webpack.config.babel.js，添加.babelrc文件，在文件中设置, "presets": ["es2015", "react"]
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/main.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: path.resolve('/dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.less'] //引入文件的时候省略后缀
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loaders: 'babel-loader',
            exclude: /node_modules/,
            include: __dirname,
            query: {
                presets: ['es2015', 'stage-2', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            })
        },
        {
            test: /\.(png|jpe?g|gif|cur|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'index.css'
        })
    ]
};