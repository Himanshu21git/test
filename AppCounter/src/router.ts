import Home from './components/Home.vue'
import Details from './components/Details.vue';
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Details',
        component : Details,
        path:'/details'
    },  
   

]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
