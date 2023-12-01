<template>
  <h3 v-highlight>Task 1 and Tast 2</h3>
  <AppCounter />
  <hr>

  <h3 v-highlight>Task 3 and Tast 4</h3>
  <AppList :arr="listData" />
  <hr>

  <h3 v-highlight>Task 5</h3>
  <AppForm />

  <h3 v-highlight>Task 6 & 7</h3>
  <li v-for="item, i in cart.productList" :key="i">
    {{ item.Product }} = ${{ item.Price }}
  </li>
  <br>
  <RouterLink :to="{ name: 'ProductDetails' }">Product Details</RouterLink>

  <h3 v-highlight>Task 8</h3>
  <FetchApi />

  <h3 v-highlight>Task 9</h3>
  <AppParent />
</template>

<script setup lang="ts">
import AppCounter from './AppCounter.vue'
import AppList from './AppList.vue';
import AppForm from './AppForm.vue';
import AppParent from './AppParent.vue';
import { useCartStore } from '../Store/index'
import FetchApi from './FetchApi.vue';

const cart = useCartStore()

const listData = [
  { value: 10, editID: false },
  { value: 20, editID: false },
  { value: 30, editID: false },
  { value: 40, editID: false },
]

</script>

<style scoped>
h3 {
  color: white;
  text-decoration: underline;
}
</style>