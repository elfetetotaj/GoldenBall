// import '@babel/polyfill'
// import 'mutationobserver-shim'
import Vue from "vue";
// import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./services/firebase";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
