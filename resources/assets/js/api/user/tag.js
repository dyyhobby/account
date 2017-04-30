/**
 * Created by dyyhobby on 2017/4/29.
 */
import Axios from '../Axios'

export const getTags = (keyword) => {

    Axios.get('?keyword=我的世界').then((response) => {

        //console.log(response);

        return response;

    }).catch((error) => {

        console.log(error);

    })

};