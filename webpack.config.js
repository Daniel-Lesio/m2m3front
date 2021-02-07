const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : {
        index : './src/index.js',
        // gallery : './src/gallery.js',
        // privacy : './src/privacy.js',
        // page : './src/page.js',
        // base : './src/base.js',
    },
    output : {
        path : path.resolve(__dirname ,'dist'),
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            },
            {
                test : /\.html$/,
                use : [
                    
                    {
                        loader : "html-loader",
                        options : {minimize : false}
                    },
                ]
            },
            {
                test : /\.(png|svg|jpeg|jpg|gif)$/i,
                loader : 'file-loader',
                options : {
                    name : 'assets/[name].[ext]',
                    esModule: false,
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    miniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader'
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        config: {
                          path: './postcss.config.js'
                        }
                      }
                    },
                    {
                      loader: 'sass-loader'
                    }
                ]
              }
        ],
    },
    plugins  : [
        new HtmlWebpackPlugin({   
            template: path.join(__dirname , './src/index.html'),
            filename : "index.html",
            minify: false,
            chunks: ['index']
            
            
        }),
        
        new miniCssExtractPlugin({
            filename : "[name].css",
            chunkFilename : "[id].css"
         }) 
    ]
}