const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");




module.exports = {
          mode: 'production',  
          entry:  "./src/client/index.js",
 module: {
   rules: [
          {
             test: /\.m?js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
                    loader: 'babel-loader',
                    options: {  
                                
                    plugins: ['@babel/plugin-transform-runtime']
                  }
          }     
         },
          {
                      test: /\.scss$/i,
                      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
                    test: /\.html$/i,
                    loader: 'html-loader',
          },
         
        ]
       
      },
      optimization: {
        minimize: true,
        minimizer: [
        new TerserJSPlugin({
       test: /\.js(\?.*)?$/i,
       parallel: true,
    }), 
    // new OptimizeCSSAssetsPlugin({ cache: true })
 ],
    runtimeChunk: 'single',
      },
      plugins: [
                new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
                }),
                new MiniCssExtractPlugin({}),
                new HtmlWebpackPlugin({
                              template: './src/client/views/index.html',
                              filename: './index.html'
          }),
       ],
       output: {
                    filename: '[name].[contenthash].bundle.js',
                    libraryTarget: 'var',
                    library: 'Client'
       }
}
   
