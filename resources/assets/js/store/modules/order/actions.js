/**
 * Created by Administrator on 2017/5/10.
 */

import axios from '../../../api';

export const getOrders = ({ commit }) => {

    axios.get('/order').then((response) => {

        commit('addOrderList',response);

    }).catch((error) => {

        console.log(error);

    });

};