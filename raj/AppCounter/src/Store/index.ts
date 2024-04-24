import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


interface Product {
    Product: string;
    Price: number
}

export const useCartStore = defineStore('cart', () => {
    // State
    const productList = ref([
        { Product: 'Product 1', Price: 100 },
        { Product: 'Product 2', Price: 430 },
        { Product: 'Product 3', Price: 199 },
        { Product: 'Product 4', Price: 300 },
    ])

    const cartList = ref<Product[]>([])

    // Getters
    const list = computed(() => cartList.value.reduce((acc, value) => acc += value.Price, 0));

    // Action 
    function removeItem(index: number) {
        cartList.value.splice(index, 1)
    }
    
    function addItem(index: number) {
        cartList.value.push(productList.value[index])
    }

    function update(name: string, price: number) {

        if (name !== '' && price !== undefined) {
            productList.value.push({ Product: name, Price: price })
        }
    }


    return {
        productList,
        removeItem,
        addItem,
        cartList,
        list,
        update
    }
})