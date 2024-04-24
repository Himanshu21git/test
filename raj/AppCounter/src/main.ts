import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.directive('highlight',(el)=>{
    el.style.background = 'linear-gradient(90deg, rgba(148,242,83,1) 0%, rgba(0,212,255,1) 100%)';
})
app.use(router)
app.use(pinia)
app.mount('#app')
