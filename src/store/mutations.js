
// 改变state
export const setMenuItems = (state, data) => {
    state.menuItems = data;
}
// 将匹配到的对象在menuItems中删除
export const removeMenuItems = (state, data) => {
    state.menuItems.forEach((item, index) => {
        if (item === data) {
            state.menuItems.splice(index, 1);
        }
    })
}
// 将新增的pizza信息添加到menuItems
export const pushToMenuItems = (state, data) => {
    state.menuItems.push(data);
}
// 更改用户状态信息
export const userStatus = (state, user) => {
    if (user) {
        state.currentUser = user;
        state.isLogin = true;
    } else {
        state.currentUser = null;
        state.isLogin = false;
    }
}