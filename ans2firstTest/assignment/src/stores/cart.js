import { defineStore } from "pinia";
import {ref} from 'vue';
import axios from 'axios';

const useCartStore = defineStore('counter',()=>{
    const count = ref(0);
    const products =ref([])
    function increment(){
        count.value++;
    }
    //importing products from link 
    async function productImport(){
        const newData = await axios.get()
                    .then((el)=> el.data);
                // console.log(newData);
                return newData;
    }
    
    products.value = productImport();
    // console.log(products.value);
    return {count,increment,products} ;
})
export default useCartStore;