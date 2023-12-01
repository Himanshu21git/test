import { createRouter , createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import CartVue from "../components/Cart.vue";

const routes =[
    {
        name: 'Home',
        component : Home,
        path: '/Home',
        alias: ['/']
    },
    {
        name: 'ProductDetails',
        component : CartVue,
        path: '/ProductDetails',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router