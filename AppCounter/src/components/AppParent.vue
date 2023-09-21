<template>
  <h1>AppParent component</h1>
  <p>ChildA Message Recevied: {{ parent }}</p>
  <button @click="sendMessage">Child ko message bhejo</button>
  <p>Child Message Recevied: {{ parent2 }}</p>
  <ChildA :pass="data" @childA="childA" />
  <ChildB :message="msg" @childEvent="updateMessage" />
</template>

<script setup lang="ts">
import ChildA from './Child/ChildA.vue'
import ChildB from './Child/ChildB.vue';
import { ref } from 'vue';
// For Child                                          
const data = ref('Pass the data from AppParent Component')
const parent = ref('');
const childA = (data: string) => {
  parent.value = data;
};

//  For ChilB Component
const msg = ref('')
const sendMessage = () => {
  msg.value = 'hello from app parent'
}
const parent2 = ref('');
const updateMessage = (message: string) => {
  parent2.value = message;
};
</script>
