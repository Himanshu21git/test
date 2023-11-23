<template>
    <ul>
        <li v-for="items,index in array"  :key="index">
            <input type="text"  v-model="array[index]" >{{ items }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps(['arr']);

const array = ref(props.arr)
</script>