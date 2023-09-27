<template>
    <h1>{{ secondChild }}</h1>
    <h3>Here we are working with Custom directives</h3>
    <h4 v-highlight>This is Custom directives</h4>
</template>

<script setup>
     import {defineProps} from 'vue';
    defineProps({secondChild:String})

        const vHighlight = {
            mounted:(el)=>{
                el.style.background='magenta';
                el.style.color='white';
            }
        }
</script>

<style>

</style>