const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
// const {GenerateSW} = require('workbox-webpack-plugin');





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
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              }
            }
          ]
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
                new WorkboxPlugin.GenerateSW(),
                // new GenerateSW(),
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
   
