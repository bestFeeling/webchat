import Vue from 'vue'
import App from './App.vue'

Object.defineProperty(global,'Vue',{
	value:Vue,
	writable:false,
	configurabel:false
});

new Vue({
  el: 'body',
  components: { App }
})
