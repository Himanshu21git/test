<template>
    <ul>
        <li v-for="items,index in array"  :key="index">
            <input type="text" v-if="items.editID" v-model="items.value">
            {{ items.value }}
            <button @click="items.editID = !items.editID">{{ items.editID ? 'Done' : 'Edit' }}</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps(['arr']);
const array = ref(props.arr)
</script>