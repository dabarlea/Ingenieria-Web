// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ToggleButton from 'vue-js-toggle-button'

//firebase
import VueFire from 'vuefire';

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(ToggleButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
