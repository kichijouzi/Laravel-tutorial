import Vue from 'vue'

// route description
import router from './router'

// route component
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'

})
