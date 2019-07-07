const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:{
        main:'./src/app.js'
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'build.js'    
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
            },
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader'
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueloaderPlugin()
    ],
    devServer:{
        port: '5000',
        historyApiFallback: true,
        hot : true,
        inline : true,
    }
}