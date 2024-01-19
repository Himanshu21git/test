<template>

  <button @click="count++"> Count :- {{ count }}</button>
  <h2>{{ count%2===0 ? 'Even': 'Odd' }}</h2>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);
</script>


