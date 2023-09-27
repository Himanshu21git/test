<template>
    <h3>Accessing Data Using Axios Package</h3>
    <div class="axiosData">
        <!-- <button @click="showData">Show Data</button> -->
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr v-for="item in newData" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td>${{ item.price }}</td>
            </tr>    
        </table>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    let newData = ref('')
    async function showData(){
        let res = await axios.get('https://fakestoreapi.com/products')
        .then((el)=> el.data)
        newData.value =res;
    }
    showData();
    // newData.val?ue= showData();
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(odd) {
  background-color: #dddddd;
}</style>