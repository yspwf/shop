const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizaCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry:{
        main:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    optimization:{
        runtimeChunk:{
            name:'./js/runtime'
        },
        splitChunks:{
            minSize: 30000,
            chunks: "async",
            minChunks: 1,
            cacheGroups:{
                common:{
                    name:'common',  
                    priority: 10,  
                    minChunks: 2,  
                    reuseExistingChunk: true,
                    enforce: true 
                },
                styles: {            
                    name: 'styles',
                    test: /\.scss|css$/,
                    chunks: 'all',   
                    enforce: true
                }
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },{
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            },{
                test:/\.css$/,
                use:[
                    //'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader'
                ]
            },{
                test:/\.scss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },{
                test:/\.(png|jpg|gif)$/,
                use:[
                    'url-loader'
                ]
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
        }),
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
        new OptimizaCssAssetsWebpackPlugin()
    ],
    devServer:{
        port:'5000',
        historyApiFallback: true
    }
}