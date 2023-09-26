<template>
    <h3>Event Handling Form </h3>
    <div class="eventHandle">
        <form @submit.prevent>
            <label id="name">Name: <input type="text" v-model="newVal"  /> </label><br/><button @click="submitForm">Submit</button>
        </form>
    </div>

</template>
<script setup >
    
    import {ref} from 'vue';
   let newVal =ref('')
 
   function submitForm(){
    setTimeout(()=>{
         alert(`Submitting value ${newVal.value}`)
    })
   }
</script>
<style scoped>
form label{
    margin-right:20px;
}

button {
    margin-top:10px;
    padding: 2px;
    width: 150px;;
}
</style>