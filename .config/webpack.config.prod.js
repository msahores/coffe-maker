const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/main.js",
  devtool: "sourcemap",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/bundle.js",
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    contentBase: "../dist",
    compress: true,
    port: 9000
  }
};
