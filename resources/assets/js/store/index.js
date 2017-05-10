/**
 * Created by Administrator on 2017/4/27.
 */
import Vue from 'vue';

import Vuex from 'vuex';

import * as mutations from './mutations'

import * as actions from './actions'

import  modules from './modules'

Vue.use(Vuex);

export default new Vuex.Store({

    state:{

        isLoading:false,
        number:0,
        keywords:[]

    },

    mutations:mutations,

    actions:actions,

    modules:modules

})