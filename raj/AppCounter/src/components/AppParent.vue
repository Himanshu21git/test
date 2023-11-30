<template>
    <h3>AppParent</h3>

    <input type="text" @input="DataA = $event.target.value" placeholder="Type send data" style="color: lightseagreen">
    <p>Recive from ChildA :- <span style="color: lightseagreen">{{ DataB }}</span></p>
    <ChildA :Data="DataA" @ChildData="(n)=> DataB = n.toUpperCase()"/>

    <ChildB :ParentToChildB="DataB"/>

</template>
<script setup lang="ts">
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';
import { ref } from 'vue';

const DataA = ref('')
const DataB = ref('')
const emit = defineEmits('ChildData')

</script>