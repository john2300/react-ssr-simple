// const express = require('express')
// const Home = require('./containers/Home')
import express from 'express'
import { render } from './utils'
// import Home from './../containers/Home'
import {getStore} from '../store'
import routes from '../Routes'
// import { StaticRouter, Route,matchPath } from 'react-router-dom'
//matchPath只能匹配到一级路径,多级路由用react-router-config
import { matchRoutes } from 'react-router-config';

const app = express()
// app.get('/',function(req,res){
//   res.send(
//     `<html>
//       <head>
//         <title>hello</title>
//       </head>
//       <body>
//         <h1>first lesson</h1>
//         <p>hello world</p>
//       </body>
//     </html>`
//   )
// })

// app.get('/', function (req, res) {
//   res.send(renderToString(<Home/>));//把Home中的代码转换成字符串的形式,再返回给服务器
// })

// const content = renderToString(<Home/>)

app.use(express.static('public')); // 发现请求静态文件,就到public的根目录下找
app.get('*', function (req, res) { // '/'路径是严格匹配/,不匹配其他的,'*'先让路由先进来,接着再匹配下面的

  // 在这里拿到异步数据,并且填充到store中
  // 需要结合当前用户请求地址和路由做判断
  // 如果用户访问/路径,就获取home组件的异步数据
  // 如果用户访问login路径, 就获取login组件的异步数据
  const store = getStore()

  //根据路由的路径,往store里面加数据
  //循环路由数组,进行匹配一级路由
  // let matchRoutes = [];
  // routes.some(route => {
  //   const match = matchPath(req.path,route);
  //   if(match){
  //     matchRoutes.push(route);
  //   }
  // })


  //多极路由

  let matchedRoutes = matchRoutes(routes,req.path);
  //浏览器会偷偷发送一次请求,请求icon图标,所以会多打印一次
  // console.log(matchRoutes);
  const promises = [];
  matchedRoutes.forEach(item => {
    //最终调用的是Home/store/action.js,是个异步请求,所以并没有真正获取到数据
    //在那边加了return
    if(item.route.loadData){
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(()=>{
    // console.log(req.path)
  res.send(render(store,routes,req))
  })
  
})
var server = app.listen(3000)
