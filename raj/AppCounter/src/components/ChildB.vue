<template>
    <h3>ChildB</h3>
    <p style="color: lightseagreen">{{ ParentToChildB }}</p>
</template>
<script setup lang="ts">

const props = defineProps({
    ParentToChildB:{
        type:String,
    }
})
</script>