<template>
    <div class="child">
      <h2>ChildB Component</h2>
      <button @click="sendMessage">Parent ko message bhejo</button>
      <p>Parent Message : {{ message }}</p>
    </div>
  
  </template>
  
<script setup lang="ts">const props = defineProps(['message'])
console.log(props.message)
const emits = defineEmits(['childEvent']);

const sendMessage = () => {
  let nm = (props.message.toUpperCase())
  console.log(nm)
  emits('childEvent', nm);
};
</script>
