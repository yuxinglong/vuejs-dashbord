import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import App from './App'
import router from './router' 

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})