import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)


app.directive('highlight',(el, binding)=>{
    el.style.backgroundColor  = binding.value
})

app.mount('#app')
