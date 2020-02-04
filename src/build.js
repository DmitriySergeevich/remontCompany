import Vue from 'vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
import './style/main.scss'



const Components = {
  About,
  Home
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
})

Vue.prototype.$eventHub = new Vue();

export default Components;