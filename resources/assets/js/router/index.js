/**
 * Created by Administrator on 2017/4/21.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Example from '../components/Example'
import User from '../components/User'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Example',
            component: Example
        },
        {
            path: '/user',
            name:'User',
            component:User
        }
    ]
})
