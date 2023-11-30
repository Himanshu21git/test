import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'

const pinia = createPinia()
const app = createApp(App)


app.directive('highlight',(el, binding)=>{
    el.style.backgroundColor  = binding.value
})
app.use(pinia)
app.mount('#app')
