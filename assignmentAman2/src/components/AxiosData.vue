<template>
    <h3>Accessing Data Using Axios Package</h3>
    <div class="axiosData">
        <p v-if="ageVal===null" id="data"></p>
        {{ ageVal }}
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