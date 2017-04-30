/**
 * Created by dyyhobby on 2017/4/29.
 */

export const addNumber = ({ commit },payload) => {

    console.log('Action 开始工作');

    console.log('有效载荷：',payload);

    setTimeout(() => { commit('increment',payload); console.log('每秒触发一次...') },1e3);

};