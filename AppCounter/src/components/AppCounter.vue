<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0)
const msg = ref('')

</script>

<template>

  <b><u><p>Task 1 or 2</p></u></b>
  <h1>{{ count }}</h1>
  <p v-if="count%2==0">Even Number</p>
  <p v-else>Odd Number</p>
  <button @click="count++">counter</button>

</template>

