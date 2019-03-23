// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// const reducer = (state = {name: 'dell'} , action) => {
//   return state
// }

// const getStore = () => {
//   return createStore(reducer, applyMiddleware(thunk))
// }
// // const store = 

// export default getStore;
// // 让每个用户访问的时候，都有自己独立的store
// //const store = createStore(reducer, applyMiddleware(thunk))不是独立的


import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer as homeReducer} from '../containers/Home/store';

// const reducer = (state = {name: 'dell'} , action) => {
//   return state
// 
const reducer = combineReducers({
  home:homeReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  //获取服务器渲染的数据
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}


// export default getStore;
// 让每个用户访问的时候，都有自己独立的store
//const store = createStore(reducer, applyMiddleware(thunk))不是独立的

