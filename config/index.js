'use strict'
const path = require('path');
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {//配置代理
      '/tax/*': 'http://localhost:3000',
    },
    host: '0.0.0.0',
    port: 8081,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,

  },
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtentions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}