<script setup lang="ts">
import AppCounter from './AppCounter.vue'
import AppList from './AppList.vue'
import AppForm from './AppForm.vue';
import AppParent from './AppParent.vue';
import { ref } from 'vue';
import customize from './Child/customize.vue';
import axios from './axios.vue';
import useCardStore from '../store'

const items = ref([
    { id: 1, name: 'Sunday' }, { id: 2, name: 'Monday' }, { id: 3, name: 'Tuesday' }, { id: 4, name: 'Wednesday' }, { id: 5, name: 'Thursday' }, { id: 6, name: 'Friday' }, { id: 7, name: 'Saturday' }
])
const cardStore = useCardStore()
interface item {
    name:string,
    price:number
}
const item: any = cardStore.cartItems
</script>

<template>


    <axios />
 <AppCounter />
 <AppList :items="items"/>
 <AppForm />
 <AppParent />
 <customize/>
 <table>
  <tr>
    <th>Product</th>
    <th>Price</th>

  </tr>
  <tr v-for="e in item" >
    <td>{{  e.name  }}</td>
    <td>{{ e.price }}</td>
   
  </tr>
</table>
 <router-link to="/details"><button>Details</button></router-link>
  <!-- <button @click="cardStore.increment">Click</button> -->

<!-- <button>Click</button> -->

</template>

