<script setup lang="ts">
const vHighlight = {
  mounted: (e:HTMLElement)=>{
    e.style.background='red'
  }
}


</script>

<template>
  <h1 v-highlight>hello</h1>
</template>