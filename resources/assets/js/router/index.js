/**
 * Created by Administrator on 2017/4/21.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            children:[
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
                    path: 'order',
                    name: 'order',
                    component: Dashboard,
                }
            ]
        }
    ]
})
