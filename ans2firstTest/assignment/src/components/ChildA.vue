<template>
    <h1>{{ firstChild }}</h1>
</template>

<script setup>
    // import {  } from 'vue';
    import {defineProps} from 'vue';
    defineProps({firstChild:String})
    
</script>

<style>

</style>