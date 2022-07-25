const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src/'))
  }
}
