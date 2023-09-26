<template>
  <AppCounter />
  <AppList />
  <AppForm />
  <!-- <PiniaComponent /> -->
  <WorkingPinia />
  <AxiosData />
  <AppParent />
</template>g

<script setup>
import AppCounter from './components/AppCounter.vue'
import AppList from './components/AppList.vue';
import AppForm from './components/AppForm.vue';
import AxiosData from './components/AxiosData.vue'; 
import AppParent from './components/AppParent.vue';
import WorkingPinia from './components/WorkingPinia.vue';
// import PiniaComponent from './components/PiniaComponent.vue';
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  background: lightgray;
  color: blue;
}

h3:hover {
  background: blue;
  color: white;
}
</style>
