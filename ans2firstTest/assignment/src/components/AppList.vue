<template>
    <h3>App List with Two Way Binding </h3>
    <ul class="arrayItem">
        <!-- {{ items }} hell -->
        <!-- /home/amankumar/JavaScript/TypeScript/assignment/src/components/AppList.vue
  4:8  error  Elements in iteration expect to have 'v-bind:key' directives  vue/require-v-for-key -->

       <li v-for="item in items" v-bind:key="item.id">
            <input v-model="item.name" type="text" @input="e=> item.name=e.target.value"/>
            <b>{{item.name}}</b>
       </li>
    </ul>
  
</template>

<script setup>
    import {ref} from 'vue'
    //items array with ref reactivity
    const items=ref([{id:'1',name:'Item no one'},{id:'1',name:'Item no two'},{id:'1',name:'Item no three'},{id:'1',name:'Item no four'}])
  
</script>

<style scoped>
.arrayItem{
    list-style: none;
}
.arrayItem li{
    padding:5px;
}
.arrayItem li input {
    margin-right: 10px;
}

h3{
    background: lightgray;
    color:blue;
}
h3:hover{
    background:blue;
    color:white;
}
</style>