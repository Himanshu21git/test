<template>
    
    <form @submit.prevent="alertValue">
        <label for="typehere">Type Here...</label><br>
        <input type="text" id="typehere" @input="data=$event.target.value">
        <button type="submit">Submit Form</button>
    </form>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const data = ref('')
function alertValue(){
    alert(data.value)
}
</script>