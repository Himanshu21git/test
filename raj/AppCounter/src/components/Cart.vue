<template>

<li v-for="item,i in cart.productList" :key="i">
    {{ item.Product }} = {{ item.Price }}
    <button @click="cart.addItem(i)">Add</button>
</li>
<button @click="updateList = !updateList">Update Products</button>
<!--  Upadte List -->
<div v-if="updateList"><br>

    <form @submit.prevent="cart.update(name , price)">
        <label for="name">Product Name </label>
        <input type="text" id="name" v-model="name"><br><br>
        <label for="price">Product Price </label>
        <input type="number" id="price" v-model="price"><br><br>
        <button type="submit" class="btn">Update</button>
    </form>

</div>
<hr>
<!-- Cart Area -->
<h3>Cart</h3>
<li v-for="item,i in cart.cartList" :key="i">

    {{ item.Product }} = {{ item.Price }}
    <button @click="cart.removeItem(i)">Remove</button>

</li>
<p>Total Price : {{ cart.list }}</p>

</template>


<script setup lang="ts">
import { useCartStore } from '../Store/index'
import { ref } from 'vue';

const updateList = ref(false)
const name = ref('');
const price = ref()
const cart = useCartStore()
console.log(cart.productList[1])
console.log(name.value , price.value)
</script>

<style scoped>
div{
    border: 2px solid green;
    font-size: 13px;
}
.btn{
    border: 2px solid gray;
    color: white;
    background-color: rgb(247, 92, 92);
}
</style>