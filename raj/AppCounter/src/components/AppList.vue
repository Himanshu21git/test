<template>
    <ul>
        <li v-for="item, index in array" :key="index">
            <input type="text" v-if="editItemID == item.id" v-model="item.value">
            {{ item.value }}
            <button @click="clickHanlder(item.id)"> {{ editItemID == item.id ? 'Done' : 'Edit' }} </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['arr']);
const array = ref(props.arr)

const editItemID = ref<number>()


function clickHanlder(itemId: number) {
    editItemID.value = editItemID.value == itemId ? 0 : itemId
}

</script>