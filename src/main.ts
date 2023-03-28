import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes, 
});
createApp(App)
	.use(router)
	.mount('#app');
