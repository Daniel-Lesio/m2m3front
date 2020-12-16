const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : {
        index : './src/index.js',
        gallery : './src/gallery.js',
        privacy : './src/privacy.js',
        page : './src/page.js',
        base : './src/base.js',
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
                    MiniCssExtractPlugin.loader,
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
        new HtmlWebpackPlugin({   
            template: path.join(__dirname , './src/base.html'),
            filename : "base.html",
            minify: false,
            chunks: ['base']
            
            
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , './src/gallery.html'),
            filename : "gallery.html",
            minify: false,
            chunks: ['gallery']

        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , './src/privacy.html'),
            filename : "privacy.html",
            minify: false,
            chunks: ['privacy']

        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , './src/page.html'),
            filename : "page.html",
            minify: false,
            chunks: ['page']
        }),
        new miniCssExtractPlugin({
            filename : "[name].css",
            chunkFilename : "[id].css"
         }) 
    ]
}