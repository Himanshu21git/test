<template>

<p>{{ data }} {{ error }}</p>

</template>

<script setup lang="ts">
import { useFetch } from '../composables/fetch'

const { data , error } = useFetch('https://jsonplaceholder.typicode.com/posts/1')

</script>