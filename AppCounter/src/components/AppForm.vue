<template>
    <p>Name </p><input type="text" v-model="name" placeholder="Enter Name">
    <p>Email </p><input type="text" v-model="email" placeholder="Enter Email">
    <!-- <br><button  @submit="Submit()" ><p>Submit</p></button> -->
    <button @click="Submit()" type="submit">Submit</button>

</template>


<script setup lang="ts">
import { ref } from 'vue';

const name = ref('')
const email = ref('')


function Submit(){
    
    if(name.value.length === 0 ){
        alert('Please fill the proper details')
    }else if(email.value.length == 0){
        alert('Please fill the proper details')
    }else {
        alert(`You are ''${name.value}'' and your email is ''${email.value}''`)

        setTimeout(() => {
            alert('Thanks for sharing details.')
            
        }, 100);
    }
    console.log(name.value.length);
        
    }

</script>