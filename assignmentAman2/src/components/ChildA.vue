<template>
    <h1>{{ firstChild }}</h1>
</template>

<script setup>
    import {ref} from 'vue';
    const firstChild = ref('Child A');
</script>

<style>

</style>