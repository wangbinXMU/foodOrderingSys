// Vuex状态管理
import Vue from 'vue'
import Vuex from 'vuex'
// 引入该文件导出的所有方法和属性为一个对象，并命名为actions
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex);
console.log('mutations' + mutations);
export const store = new Vuex.Store({
    state: {
        menuItems: {},
        currentUser: '',
        isLogin: false
    },
    getters,
    mutations,
    actions
});