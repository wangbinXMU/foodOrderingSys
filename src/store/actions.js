// 拆分出的actions

 // 分发mutation,user为传来的数据（email或null）
 export const setUser = ({commit},user)=>{
    // 提交mutation
    commit('userStatus',user);
}