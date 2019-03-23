
import React from 'react';
import Header from './../../components/Header'

const Login = () => {
  // 也不支持react的js语法,需要webpack打包
  // return <div>home NIDDD</div>
  return (
    <div>
      <Header/>
      <div>Login</div>
    </div>
  )
}

// 导出也不支持export default XXX的形式 写module.exports
export default Login;
