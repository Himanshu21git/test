import { defineStore } from "pinia";
import { computed, ref } from "vue";

const cardStore = defineStore("cartStore", () => {
  const items = ref([])
  // const count = ref(0);
  // const double = computed(() => count.value * 2);
  const itemCount = computed(() => items.value.length) 
  const itemPrice = computed (()=> items.value.reduce((e,item) => (e + item.price) ,0))
  const cartItems = computed(() => items.value) 
  
  function addToCart(e) {
    items.value.push(e);
  }

  function removeFromCart(index:number) {
    items.value.splice(index, 1);
  }

  return { items,itemPrice, itemCount, cartItems, addToCart,removeFromCart };
});


export default cardStore