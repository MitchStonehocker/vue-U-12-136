import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
  // bind (el, binding, vnode)
  bind (el, binding) {
    //1) el.style.backgroundColor = 'green'
    //1) el.style.color = 'white';
    //2) el.style.backgroundColor = binding.value
    //2) el.style.color = 'white';
    var delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
