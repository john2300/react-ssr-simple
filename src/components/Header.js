
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/Login">Login</Link>      
    </div>
  )
}
//通过f5资源管理器发现,首页请求会有index.html和index.js加载出来,但是之后的路径跳转没有资源加载,因为是服务器端渲染,只有首屏是请求之后再加载的,之后的路由控制由服务器端,即react里的js控制的.react做同构的时候,服务器端渲染只发生在第一次进入页面的时候
export default Header;
