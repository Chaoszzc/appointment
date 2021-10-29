// vue.config.js
const webpack = require('webpack');
module.exports = {
    lintOnSave: false,
    // outputDir: "APPOINTMENT",
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
        host: "0.0.0.0",
        port: 8098, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: 'http://192.168.0.132:8260/', //对应服务器地址
                // target: 'http://localhost:8080/TBP_war/a/hgjjeb/wx/', //对应服务器地址
                changeOrigin: true, //允许跨域
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}