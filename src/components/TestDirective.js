'use strict';

import Vue from 'vue';

Vue.directive('test', {
  // When the bound element is inserted into the DOM...
  inserted: function (el, binding) {
    console.log("inserted", binding )
  },

  update: function (el, binding) {
    console.log("updated", binding)
  }
});
