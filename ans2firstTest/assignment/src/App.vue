<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <AppCounter/>
  <AppList/>
  <AppForm/>
  <AxiosData />
  <AppParent />
  <!-- <ChildA name="This is First Child"/>
  <ChildB   name ="This is Second Child"/> -->
 
</template>

<script setup>
import AppCounter from './components/AppCounter.vue'
import AppList from './components/AppList.vue';
import AppForm from './components/AppForm.vue';
import AxiosData from './components/AxiosData.vue';
// import ChildA from './components/ChildA.vue';
// import ChildB from './components/ChildB.vue';
import AppParent from './components/AppParent.vue';
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
h3{
    background: lightgray;
    color:blue;
}
h3:hover{
    background:blue;
    color:white;
}
</style>
