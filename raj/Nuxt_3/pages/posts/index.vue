<template>
      <div class="bg-gradient-to-r from-[#dbedfa] to-[#faf4ff] pb-10">
            <ul v-if="products.length" class="h-full w-full grid grid-cols-2 gap-x-6 gap-y-0 px-2 pb-0 sm:grid-cols-3 sm:px-8 pt-16 lg:grid-cols-3 lg:gap-x-10 lg:px-10 xl:px-32 place-items-center">
                  <!-- product card -->
                  <li v-for="product in products" :key="product.id"
                        class="relative mt-10 sm:mx-0 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-lg effect"
                        >
                              <!-- product image -->
                              <NuxtLink :to="`/en/posts/${product.id}`" class="center">
                                    <img class="h-40 sm:h-60 rounded-t-lg sm:object-contain object-cover"
                                          :src="product.thumbnail"
                                          alt="product image" />
                              </NuxtLink>
                              <span
                                    class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                              <!-- product detailes -->
                              <div class="mt-2 sm:px-5 sm:pb-5 px-2 pb-2">
                                    <!-- product title -->
                                    <NuxtLink :to="`/en/posts/${product.id}`" class=""> 
                                          <h5 class="text-md font-semibold  text-slate-900 overflow-hidden h-12 ">{{ product.title }}</h5>
                                    </NuxtLink>
                                    <!-- product rating and star -->
                                    <div class="mt-1 mb-2 flex items-center">
                                          <span
                                                class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{ product.rating }}</span>
                                          <svg v-for="star in 5" aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                          </svg>
                                          
                                    </div>
                                    <!-- product price and add to card container -->
                                    <div class="flex items-start sm:items-center justify-between  sm:flex-row flex-col ">
                                          <p class="pb-2">
                                                <span class="text-2xl font-bold text-slate-900">${{ product.price }}</span>
                                                <span class="text-sm text-slate-900 line-through">${{ (product.price * 1.4).toFixed(2) }}</span>
                                          </p>
                                          <button
                                                class="flex items-center  rounded-md bg-slate-900  sm:px-3 sm:py-2.5 px-5 py-1 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                @click="addCartItem(product , 1)" >
                                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none"
                                                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                      >
                                                      <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Add to cart
                                          </button>
                                    </div>
                              </div>
                        <!-- </div> -->


                  </li>
            </ul>
            
            <!-- product card loading state -->
            <div v-else class="h-full grid grid-cols-2 gap-x-6 gap-y-0 px-2 pb-0 sm:grid-cols-3 sm:px-8 pt-16 lg:grid-cols-3 lg:gap-x-10 lg:px-10 xl:px-32 place-items-center" >

                  <div v-for="cardSkeleton in 6" class="relative m-8 rounded shadow-md w-full max-w-xs animate-pulse h-96">
                        <div class="h-48 rounded-t dark:bg-gray-700 bg-gray-300"></div>
                        <div class="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900 bg-gray-100">
                              <div class="w-full h-6 rounded dark:bg-gray-700 bg-gray-200"></div>
                              <div class="w-full h-6 rounded dark:bg-gray-700 bg-gray-200"></div>
                              <div class="w-3/4 h-6 rounded dark:bg-gray-700 bg-gray-200"></div>
                        </div>
                  </div>
            </div>
            <template v-if="isLoding" >

                  <Loding />

            </template>
    
      <!-- END -->
</div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cartStore';
import { useFetchStore } from '~/store/fetchPost';

definePageMeta({
      middleware: [ "auth" , "product-data-fetch"],
      layout: 'product'
})
const isLoding = ref(false)
const fetchStore = useFetchStore()
const { addCartItem } = useCartStore()

/** computed property to get product data */
const products = computed(() => fetchStore.productsData)

/**
 *    when scrollEnd then add product more...
 */

window.onscroll = ()=> {

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && products.value.length < 500 && products.value.length < 100) {
            isLoding.value = true
            setTimeout(async() => {
                  await fetchStore.setFetchLimit()
                  isLoding.value = false
            }, 500);
      }
}

</script>