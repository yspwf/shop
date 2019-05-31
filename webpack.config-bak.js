const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        main:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    // devtool: "#eval-source-map",
    // optimization:{
    //     splitChunks:{
    //         chunks: "all",
    //         cacheGroups:{
    //             vendors:{
    //                 test:/[\\/]node_modules[\\/]/,
    //                 priority: -10
    //             },
    //             default:{
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:['lodash']
                    }
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                //loader:'style-loader!css-loader'
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"    
                    }
                ]
            },
            {
                test:/\.(sass|scss)$/,
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     "css-loader",
                //     "sass-loader"
                // ]
                //loader:'style-loader!css-loader!sass-loader'
                use:[
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    'sass-loader'
                ]
            },
            {
                test:/\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
                loader:'url-loader'
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src/page'),
            'css': path.resolve(__dirname, './src/static'),
            'components': path.resolve(__dirname, './src/components'),
        },
        //extensions: ['.js', '.json', '.css', '.vue']
        //extensions: [".js",".json",".vue"]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
            minify:{
                minimize: true,
                removeConments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        
    ],
    devServer:{
        port: 9091,
        historyApiFallback: true
    }
}