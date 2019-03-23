import {CHANGE_LIST} from './contains'
const defaultState = {
  name:'dell',
  newsList:[]
}

export default (state = defaultState,action) => {
  switch(action.type){
    //change_home_list写成这样，容易出错，把它写到一个变量里，导出来
    // case 'change_home_list':
    case CHANGE_LIST:
      return {
        ...state,
        newsList:action.list
      };
    default:
      return state
  }
}