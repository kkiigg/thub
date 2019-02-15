import Vue from 'vue/dist/vue.common.js';
import VueRouter from 'vue-router';
import App from '../views/app.vue';
import routes from './router.js'
const root=document.createElement('div');
document.body.appendChild(root);
Vue.use(VueRouter);

const router=new VueRouter({
	routes,
})
new Vue({
	router,
	render:(h)=>h(App)
}).$mount(root);