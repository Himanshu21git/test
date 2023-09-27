<template>
  <div>
      
  <h3> This is Child Componnet Inhertance</h3>
    <ChildA first-child="First Child"/>
    <ChildB second-child="Second Child"/>
  </div>
</template>

<script setup>
// import {defineProps} from 'vue';
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';

</script>

<style>

</style>