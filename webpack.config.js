const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: 'development',
    // mode: 'production', // 编译后的文件会压缩
    entry: './src/index.js',
    output: {
        filename: 'index.js' // 指定输入文件的文件名
    },
    plugins: [
        // new HtmlWebpackPlugin() // 编译后自动生成html文件并引入出口的js文件
        new HtmlWebpackPlugin({
            template: './src/index.html' // 手动指定index.html的模板
        }),
        new CopyPlugin([{ from: "static", to: "static" }]), // 拷贝文件到编译后的目录
    ]
}