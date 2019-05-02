'use strict';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// Vue.nextTick(function () {
//   //$(this.$el).find('pre code').each(function(index, pre) {
//   Prism.highlightAll();
//   //});
// });
