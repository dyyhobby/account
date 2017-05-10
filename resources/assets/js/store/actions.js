/**
 * Created by dyyhobby on 2017/4/29.
 */
import axios from '../api';

export const addNumber = ({ commit },payload) => {

    console.log('Action 开始工作');

    console.log('有效载荷：',payload);

    setTimeout(() => { commit('increment',payload); console.log('每秒触发一次...') },1e3);

};

export const addKeywords = ({ commit },payload) => {

    axios.get('/keyword').then((response) => {

        console.log(response);

        commit('keywords',response);

    }).catch((error) => {

        console.log(error);

    });

};