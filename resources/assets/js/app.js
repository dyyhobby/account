
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'

import router from './router'

import App from './components/App'

import store from './store'



//Vue.config.productionTip = true;

//Vue.config.devtools = true;

router.beforeEach((to, from, next) => {

    console.log('路由开始工作...');

    next();

});

router.afterEach(router => {

    console.log('路由工作结束...');

});

new Vue({
    el: '#app',
    router,
    store,
    components:{ App },
    template:'<App/>',
    beforeCreate:() => { console.log('应用程序开始创建...') },
    created:() => { console.log('应用程序创建完成...') },
    beforeMount:() => { console.log('应用程序开始挂载...') },
    mounted:() => { console.log('应用程序挂载完成...') },
    beforeUpdate:() => { console.log('应用程序开始更新...') },
    updated:() => { console.log('应用程序更新完成...') },
    beforeDestroy:() => { console.log('应用程序开始销毁...') },
    destroyed:() => { console.log('应用程序销毁完成...') }
});
