<template>
  <div class="counter">
    <button @click="increment">Increment</button>
    <h1 v-if="count%2===0">{{ count }}</h1>
    <h1 v-else>{{ count-1 }}</h1>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
let count =ref(0);

function increment(){
  count.value++;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
