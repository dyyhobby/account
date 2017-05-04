import Vue from 'vue'
import router from './router'
import App from './components/App'
import store from './store'
import N3Components from 'N3-components'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven.config('https://c744072500d1456084f0b7790f8ba504@sentry.io/164257').addPlugin(RavenVue,Vue).install();

N3Components.install(Vue);

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
    mounted:() => {
        console.log('应用程序挂载完成...');
    },
    beforeUpdate:() => { console.log('应用程序开始更新...') },
    updated:() => { console.log('应用程序更新完成...') },
    beforeDestroy:() => { console.log('应用程序开始销毁...') },
    destroyed:() => { console.log('应用程序销毁完成...') },
    errorHandler:(error,vm) => {

        console.log(error,vm);

    }
});
