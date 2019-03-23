const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        options:{
          presets:[
            ['@babel/preset-env',{
              targets:{
                browsers:['last 2 versions']//兼容最后两个版本的浏览器
              }
            }],'@babel/preset-react'
          ]
        }
      }
    ]
  }
}
