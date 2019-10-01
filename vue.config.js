module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}

// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:8080'
//   }
// }

// config.output.publicPath = 'http://localhost:8080'