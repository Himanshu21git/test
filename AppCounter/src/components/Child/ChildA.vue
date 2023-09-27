<template>
  <h1>ChildA component</h1>
  <p><b>AppParent: </b><u>{{ data }}</u></p>
  <p>Send the message to received data'& length <button @click="send">Send</button></p>

</template>

<script setup lang="ts">
 import { defineProps } from 'vue';
  const props = defineProps(['pass'])
  const data = props.pass
  // console.log(data);


  const emits = defineEmits(['childA']);
  const send = () => {
  let nm = (props.pass.length)
  // console.log(nm)
  emits('childA', nm);
};

</script>
