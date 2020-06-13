import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightList:JSON.parse(sessionStorage.getItem('rightList')||'[]'),//将字符串变为数组
    username: sessionStorage.getItem('username')
  },
  mutations: {
    setRightList(state, data) {
      state.rightList = data
      sessionStorage.setItem('rightList',JSON.stringify(data))//将数据保存在session中
    },
    setUsername(state, data) {
      state.username = data
      sessionStorage.setItem('username',data)
    }
  },
  actions: {
  },
  getters: {
  }
})
