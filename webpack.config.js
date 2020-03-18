const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,"css-loader" ]
      },

      {
        test: /\.s[ca]ss$/,
        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],
      }
    ],

  },
  entry: {
    'main': './src/main.js',
    'index': './src/index/index.js',
    'product': './src/product/product.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ['index', 'main']

    }),
    new HtmlWebpackPlugin({
      template: "./src/product/product.html",
      filename: "product/product.html",
      chunks: ['product','main']
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash:7].css'
    }),
  ],
  devServer: {
    open: true,
  }

};