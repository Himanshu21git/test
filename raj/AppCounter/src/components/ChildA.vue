<template>
    <h3>ChildA</h3>
    <button @click="$emit('ChildData', Data)" >Send Data</button>
</template>
<script setup lang="ts">

const props = defineProps({
    Data:{
        type:String,
        default: 'Default',
    }
})
const emit = defineEmits(['ChildData'])
</script>

<style scoped>
button{
    font-size: 13px;
    border: 2px solid gray;
}
</style>