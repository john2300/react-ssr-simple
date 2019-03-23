在node服务器的环境下,不支持import模块引入,只能是require

导出也不支持export default XXX的形式 写module.exports

也不支持react的js语法,需要webpack打包


前三章流程图

  1.服务器端运行react代码渲染出HTML

  2.发送HTML给浏览器

  3.浏览器接收到内容展示

  4.浏览器加载js文件

  5.js中的react代码在浏览器端重新执行

  6.js中的react代码接管页面操作