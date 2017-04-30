/**
 * Created by dyyhobby on 2017/4/29.
 */

import Api from '../../../api'

export const userUpgrade = ({ commit },payload) => {

    let tags = Api.user.tag.getTags();

    commit('userIncrement',payload)

};