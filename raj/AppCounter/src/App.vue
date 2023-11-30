<template>
  <h3 v-highlight="'red'">Task 1 and Tast 2</h3>
  <AppCounter/><hr>

  <h3 v-highlight="'red'">Task 3 and Tast 4</h3>
  <AppList  :arr="[10,20,30,40]"/><hr>
  
  <h3 v-highlight="'red'">Task 5</h3>
  <AppForm/>

  <h3 v-highlight="'red'">Task 9</h3>
  <AppParent/>
</template>



<script setup lang="ts">
import AppCounter from './components/AppCounter.vue'
import AppList from './components/AppList.vue';
import AppForm from './components/AppForm.vue';
import AppParent from './components/AppParent.vue';

</script>

<style scoped>
h3{
  color: white;
  text-decoration: underline;
}
</style>

