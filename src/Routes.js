import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

// export default (
//   <div>
//     <Route path='/' exact component={Home} ></Route>
//     <Route path='/login' exact component={Login} ></Route>
//   </div>
// )

export default [
  
  {
    path:'/',
    component:Home,
    // exact:true,
    loadData:Home.loadData,
    key:'home',
    // //匹配不出多级路径
    // routes:[{
    //   path:'/test',
    //   component:Login,
    //   exact:true,
    //   key:'test'
    // }]
  },
  {
    path:'/Login',
    component:Login,
    exact:true,
    key:'Login'
  }
];