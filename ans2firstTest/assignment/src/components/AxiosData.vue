<template>
    <h3>Accessing Data Using Axios Package</h3>
    <div class="axiosData">
        <p v-for="product in ageVal" v-bind:key="product.id">
            {{ product.id }} {{ product.title }}
        </p>     
    </div>
</template>
<script setup>
    const axios = require('axios');
    
    let ageVal =axios.get('https://fakestoreapi.com/products')
                    .then((getVal)=>{ 
                        console.log(getVal)
                        return getVal;
                    })

</script>
