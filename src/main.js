import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Track from './components/Track.vue'
import Navbar from './components/Navbar.vue'

Vue.use(VueRouter);
Vue.component('app-nav',Navbar);

const routes = [
  { path:'/',component:Home},
  { path:'/about',component:About},
  { path:'/track',name:'track',component:Track}
  

];

const router = new VueRouter({
  routes,
  mode:'history'
});
 
new Vue({
  el: '#app',
  router,
  //render or load the VueJs App and App is App.vue file and then render that file.
  render: h => h(App)
})
