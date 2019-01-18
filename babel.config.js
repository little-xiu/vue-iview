module.exports = {
  presets: [
    '@vue/app'
  ],
  // sourceType: 'unambiguous', //iview文件夹放在node_modules外配置，不打包编译iview文件夹
  plugins: [["import", {
    "libraryName": "iview",
    "libraryDirectory": "src/components"
  }]]
}