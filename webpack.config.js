
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js', // 打包的入口文件  相对路径  也可以改成 绝对 path.resolve('./app/index.js')
    // 配置输出的目录和文件名
    output: {
        path: path.resolve('build'),  // 打包后的文件保存的目录
        filename: "bundle.js"   // 保存打包后的文件名
    },
    // 配置模块的打包方式
    module: {
        rules: [
            {test : /\.jsx?$/, use:'babel-loader', exclude: /node_modules/},
            {test : /\.less$/, use:["style-loader", "css-loader", "less-loader"]},
            // limit=8194 限制图片大小的分界线为  8 * 1024 字节 小于的话会转为 base64 格式内嵌到网页中 ， 否则的话会经过重命名后保存到目标中去， 在网页中会得到一个新的 url 路径
            {test : /\.(gif|png|jpg)$/, use:'url-loader?limit=8194'}
        ]
    },

    plugins: [
        // 可以以 index.html 作为模版  并像其中插入打包后的 bundle.js 文件 , 然后保存到目标路径下
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]

};


