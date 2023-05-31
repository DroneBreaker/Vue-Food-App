const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//          'vue-style-loader',
//           'css-loader'
//         ],
//       },

//       {
//         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//         use:[ { loader: "url-loader", options: {limit: 10000, mimetype: 'application/octet-stream'} }]
//      },

//      {
//       test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
//       use:[ { loader: "url-loader", options: {limit: 10000, mimetype: 'application/font-woff'} }]
//   },
//     ],
// },
})
