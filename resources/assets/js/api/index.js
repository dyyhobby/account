/**
 * Created by dyyhobby on 2017/4/29.
 */

import axios from 'axios'

import iview from 'iview'

export default axios.create({

    baseURL:"http://account.app/api",
    timeout:3000,
    transformRequest:[(config) => {
        iview.LoadingBar.start();
        return config;
    }],
    transformResponse:[(response) => {
        iview.LoadingBar.finish();
        return JSON.parse(response);
    }]

});