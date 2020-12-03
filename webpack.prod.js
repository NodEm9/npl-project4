const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




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
                      test: /\.css$/i,
                      use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
                    test: /\.html$/i,
                    loader: 'html-loader',
          },
         
        ]
       
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
                    libraryTarget: 'var',
                    library: 'Client'
       }
}

