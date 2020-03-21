const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.png|jpg|jpeg|gif$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images/',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
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
    new CleanWebpackPlugin(),
  ],
  devServer: {
    open: true,
  }

};