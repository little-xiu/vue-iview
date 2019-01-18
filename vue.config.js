'use strict'
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  devServer: {//配置代理
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@iview', resolve('src/iview'))
      .set('@pages', resolve('src/pages'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@services', resolve('src/services'))
      .set('@filter', resolve('src/filter'))
    // 分析打包后的文件
    if (process.env.npm_config_report) {
      config.plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}