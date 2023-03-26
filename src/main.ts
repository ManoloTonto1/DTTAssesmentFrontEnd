import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})
createApp(App)
    .use(router)
    .mount('#app')
