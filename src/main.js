import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
//防止点击两次以上报错！
import Router from 'vue-router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


//防止点击两次以上报错！
const originalPush = Router.prototype.replace
Router.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
