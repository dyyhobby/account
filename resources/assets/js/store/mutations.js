/**
 * Created by dyyhobby on 2017/4/29.
 */

export const increment = (state,payload) => {

    console.log('Mutation 开始工作...');

    console.log('有效载荷：',payload);

    state.number++

};
