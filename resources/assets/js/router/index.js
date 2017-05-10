/**
 * Created by Administrator on 2017/4/21.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import OrderIndex from '../components/order/index.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: 'user',
            name: 'user',
            component: Dashboard,
        },
        {
            path: 'application',
            name: 'application',
            component: Dashboard,
        },
        {
            path: '/order',
            name: 'order',
            component: OrderIndex,
        }
    ]
})
