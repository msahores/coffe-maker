const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    mode: 'production',
    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']        
        }
    ]
},
plugins: [
    new MiniCssExtractPlugin({
        filename: '../dist/css/bundle.css'
    }),
    new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
	    filename: 'index.html', 
	    minify: 'true'
        })
    ],
devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 9000
    }
}
