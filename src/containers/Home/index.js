// import React from 'react';
// 在node服务器的环境下,不支持import模块引入,只能是require
// const React = require('react');
// import React from 'react';
// import { connect } from 'react-redux';
// import Header from './../../components/Header';
// const Home = () => {
//   // 也不支持react的js语法,需要webpack打包
//   // return <div>home NIDDD</div>
//   return (
//     <div>
//       <Header/>
//       <div>this is zhanghang</div>
//       <button onClick={()=>{alert('click1')}}>
//         click
//       </button>
//     </div>
//   )
// }
// export default Home;


import React,{Component} from 'react';
import { connect } from 'react-redux';
import Header from './../../components/Header';
import { getHomeList } from '../Home/store/actions'

class Home extends Component{
  getList(){
    const { list } = this.props;
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
  render(){
    
    return (
      <div>
        <Header/>
        {/* <div>this is {this.props.name}</div> */}
        {/* {
          this.props.list.map(() => {
            return 
          })
        } */}
        {this.getList()}
        <button onClick={()=>{alert('click1')}}>
          click
        </button>
      </div>
    )
  }
  //在服务器端渲染的时候不会被执行
  //解决了服务端渲染执行的问题,在window.context挂载一个数据对象,但是这个数据对象只有进入第一个页面时才会生效,还是要发ajax请求,解决办法是折中,判断有这个数据没,有就不执行如下代码,没有就执行
  componentDidMount(){
    if(!this.props.list.length){
    this.props.getHomeList();
    }
  }
}
Home.loadData = (store) => {
  //这个函数,负责在服务器端渲染之前,把这个路由需要的数据提前加载好,返回一个promise结果
  return store.dispatch(getHomeList());
}
// const Home = (props) => {
  // 也不支持react的js语法,需要webpack打包
  // return <div>home NIDDD</div>
  // return (
  //   <div>
  //     <Header/>
  //     <div>this is {props.name}</div>
  //     <button onClick={()=>{alert('click1')}}>
  //       click
  //     </button>
  //   </div>
  // )
// }


const mapStateToProps = state => ({
  list:state.home.newsList,
  name:state.home.name
});

const mapDispatchToProps = dispatch => ({
  getHomeList(){
    dispatch(getHomeList());
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);

//因为服务器端没有store，服务器端会报错
// Could not find "store" in the context of "Connect(Home)"