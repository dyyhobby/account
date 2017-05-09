import Vue from 'vue';
import router from './router';
import App from './components/App';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven.config('https://c744072500d1456084f0b7790f8ba504@sentry.io/164257').addPlugin(RavenVue,Vue).install();

Vue.use(iView);

//Vue.config.productionTip = true;

//Vue.config.devtools = true;

router.beforeEach((to, from, next) => {

    iView.LoadingBar.start();

    next();

});

router.afterEach(router => {

    iView.LoadingBar.finish();

});

new Vue({
    el: '#app',
    router,
    store,
    components:{ App },
    template:'<App/>',
    errorHandler:(error,vm) => {

        console.log(error,vm);

    }
});
