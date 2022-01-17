import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import DataTable from "@andresouzaabreu/vue-data-table"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@andresouzaabreu/vue-data-table/dist/DataTable.css"

Vue.config.productionTip = false
Vue.component("data-table", DataTable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)