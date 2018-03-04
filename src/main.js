import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    add (state, text) {
      state.items.push({
        checked: false,
        text
      })
    },
    remove (state, index) {
      state.items.splice(index, 1)
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
