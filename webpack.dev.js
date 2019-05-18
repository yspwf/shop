const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:{
        main:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },{
                test:/\.vue$/,
                loader:'vue-loader',
                // options: {
                //     loaders: {
                //       scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                //       sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                //     }
                // }
            },{
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },{
                test:/\.(sass|scss)$/,
                //loaders:['style','css','sass']
                use:['style-loader','css-loader','sass-loader']
            },{
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
        new VueLoaderPlugin()
    ],
    // devServer:{
    //     port:'5000',
    //     historyApiFallBack: true
    // }
    devServer:{
        port:'5000',
        historyApiFallback: true
    }
}
