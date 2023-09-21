<template>
<b><u><p>Task 3 or 4</p></u></b>

    <ul>
        <li v-for="item in items" :key="item.id">
            <label :for="item.name">{{ item.name }}</label>
            <input v-show="show" :id='item.name' v-model="item.name" type="text">
        </li>
        <button @click="show = !show">Edit</button>
    </ul>
</template>
  
<script setup lang="ts">
import { ref, defineProps } from 'vue';
const props = defineProps(['items'])
const items = props.items
console.log(items);
const show = ref(false)

</script>