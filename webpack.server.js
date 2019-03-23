const path = require('path');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge');

const serverConfig = {
  mode:'development',
  // 为了不把 node_modules 目录下的第三方模块打包进输出文件中
  externals: [nodeExternals()],
  target: 'node', // 在服务器端需要加上这句代码
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}
module.exports = merge(baseConfig,serverConfig);
