<template>
   <div>
    <router-link to="/"><p>Go Back to home</p></router-link>
    <h1>Cart</h1>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }}  ₹{{ item.price }}
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <p>Total Items in Cart: {{ itemCount }}</p>
    <p>Total Items Price: {{ itemPrice }}</p>
    <button @click="addToCart({ name: 'Product 1', price: 5 })">Add Product 1</button>
    <button @click="addToCart({ name: 'Product 2', price: 10 })">Add Product 2</button>
    <button @click="addToCart({ name: 'Product 3', price: 15 })">Add Product 3</button>
    <button @click="addToCart({ name: 'Product 4', price: 20 })">Add Product 4</button>
    <button @click="addToCart({ name: 'Product 5', price: 25 })">Add Product 5</button>
  </div>

    <!-- <h1>{{ cardStore.count }}</h1>
  <button @click="cardStore.increment">Click</button> -->
</template>

<script setup lang="ts">
// import type { count } from 'console';
import useCardStore from '../store'
const cardStore = useCardStore()

    const cartItems = cardStore.cartItems;
    const itemCount = cardStore.itemCount;
    const addToCart = (item) => cardStore.addToCart(item);
    const removeFromCart = (index) => cardStore.removeFromCart(index);
    const itemPrice =  cardStore.itemPrice

  
  
</script>



