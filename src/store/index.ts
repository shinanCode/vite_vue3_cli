import { createStore } from 'vuex'

let store = createStore({
  state() {
    count: 0
  },

  mutations: {
    INCREASE(state: any) {
      state.count++
    }
  },

  actions: {
    increment(context) {
      context.commit('INCREASE')
    }
  },

  getters: {
    double(state: any) {
      return 2 * state.count
    }
  }
})

export default store
