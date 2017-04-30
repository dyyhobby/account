/**
 * Created by dyyhobby on 2017/4/29.
 */

export const userIncrement = (state,payload) => {

    console.log(payload);

    state.info.age += payload.amount

};
