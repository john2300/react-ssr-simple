import axios from 'axios';
import { CHANGE_LIST } from './contains'
export const getHomeList = () => {
  console.log("axios");
  const changeList = (list) => ({
    type:'change_home_list',
    list: list
  })
  return (dispatch) =>{
    // 没有配置后台
    //返回一个promise结果
    return axios.get('')
      .then((res)=>{
        const list = res.data.data;
        dispatch(changeList(list));
      })
  }
}