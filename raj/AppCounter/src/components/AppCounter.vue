<template>

  <button @click="count++"> Count :- {{ count }}</button>
  <h2 v-if="count%2 === 0 ">Even Number</h2>
  <h2 v-else>Odd Number</h2>

</template>



<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);

</script>


