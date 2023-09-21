<script setup lang="ts">
import AppCounter from './AppCounter.vue'
import AppList from './AppList.vue'
import AppForm from './AppForm.vue';
import AppParent from './AppParent.vue';
import { ref } from 'vue';
import customize from './Child/customize.vue';


const items = ref([
    { id: 1, name: 'Sunday' }, { id: 2, name: 'Monday' }, { id: 3, name: 'Tuesday' }, { id: 4, name: 'Wednesday' }, { id: 5, name: 'Thursday' }, { id: 6, name: 'Friday' }, { id: 7, name: 'Saturday' }
])

</script>

<template>


 <AppCounter />
 <AppList :items="items"/>
 <AppForm />
 <AppParent />
 <customize/>



</template>

