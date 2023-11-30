import {defineStore} from 'pinia'
import { computed , ref } from 'vue'
export const useCartStore = defineStore('cart',()=>{
    const productList = ref([
        { Product:'Product 1' , Price: 100},
        { Product:'Product 2' , Price: 430},
        { Product:'Product 3' , Price: 199},
        { Product:'Product 4' , Price: 300},
    ])
    return {productList}
})