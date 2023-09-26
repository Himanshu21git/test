<template>
    <div>
        <h3>Working with Pinia</h3>
        {{ store.count }}
        <button @click="store.increment()">Inc with Pinia</button>
    </div>
    <div>
        <h3> Routing Work</h3>
        <ul>
           <li v-for="product in availProducts" :key="product.id">
                {{ console.log(product) }}
                {{ product.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="js">
    import useCartStore from '../stores/cart';
    import { computed } from 'vue';
    const store = useCartStore();
    // console.log(store.products);
    const availProducts = computed(()=> store.products)
    // console.log(availProducts.value)
</script>
<style scoped>
button:hover{
    background: gray;
    color:white;
}
</style>