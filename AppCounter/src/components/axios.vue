<template>
<button v-if="show" @click="api"  @dblclick="clear">click</button>
<button v-else="!show" @click="clear">click</button>
<table>
  <tr>
    <th>UserId</th>
    <th>id</th>
    <th>description</th>
    <th>category</th>
  </tr>
  <tr v-for="item in data" >
    <td>{{  item.id  }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.description }}</td>
    <td>{{ item.category}}</td>
  </tr>
</table>
<!-- <h1 v-for="item in data" :key="item" >{{ item.id }}</h1> -->



</template>
 

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';

interface data{
    id:number,
    title:string,
    description:string,
    category:string
}


let data = ref<data[]>()
let show = ref<boolean>(true)

async function api() {
  
  show = !show
  console.log(show , 'api');
    // console.log(email.value, password.value)
    let res = await axios.get(
        `https://fakestoreapi.com/products`
    )
    data.value = res.data

    console.log(data.value);
}

function clear(){
  show = !show
  data.value = []
  console.log('clear' , show);
}
</script>

