<template>
      <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800 ">
            <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 -z-50">
                  <div class="flex flex-wrap -mx-4">
                        <!-- image container -->
                        <ImageSlider :getImages="productsData.images"/>
                        <!-- Detailed  container -->
                        <div class="w-full px-4 md:w-1/2 ">
                              <div class="lg:pl-20">
                                    <!-- infomative container -->
                                    <div class="mb-8 ">
                                          <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                          <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                                {{ productsData.title }}
                                          </h2>
                                          <!-- rating and review container -->
                                          <div class="flex items-center mb-6">
                                                <ul class="flex mr-2">
                                                      <li v-for="item in 5" :key="item">
                                                            <a href="#">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" fill="currentColor"
                                                                        class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                        viewBox="0 0 16 16">
                                                                        <path
                                                                              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                                  </svg>
                                                            </a>
                                                      </li>
                                                </ul>
                                                <p class="text-xs dark:text-gray-400 ">({{ productsData.rating }}
                                                      customer reviews)</p>
                                          </div>
                                          <!-- dicription  -->
                                          <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                                {{ productsData.description }}
                                          </p>
                                          <!-- price -->
                                          <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                                <span>${{ productsData.price }}</span>
                                                <span
                                                      class="text-base font-normal text-gray-500 line-through dark:text-gray-400">${{
                                                            productsData.price * 2.3 }}</span>
                                          </p>
                                          <p class="text-green-600 dark:text-green-300 ">{{ productsData.stock }} in stock</p>
                                    </div>
                                    <!-- Size select container -->
                                    <div class="flex items-center mb-8">
                                          <h2 class="w-16 text-xl font-bold dark:text-gray-400">
                                                Size:</h2>
                                          <div class="flex flex-wrap -mx-2 -mb-2">
                                                <button
                                                      class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">S
                                                </button>
                                                <button
                                                      class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                                                </button>
                                                <button
                                                      class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">L
                                                </button>

                                          </div>
                                    </div>
                                    <!-- quantity select container -->
                                    <div class="w-36 mb-8 ">
                                          <label for=""
                                                class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                                          <div class="relative flex flex-row w-full h-10 mt-4  rounded-lg">
                                                <button @click="decrese()"
                                                      class="w-20 h-full text-gray-600  rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                                      <span class="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input type="number"
                                                      class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 text-md "
                                                      :value="qnt">
                                                <button @click="increse()"
                                                      class="w-20 h-full text-gray-600  rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                                      <span class="m-auto text-2xl font-thin">+</span>
                                                </button>
                                          </div>
                                    </div>
                                    <!-- cart and wishlist container -->
                                    <div class="flex flex-wrap items-center -mx-4 ">
                                          <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                                <button @click="addCartItem(productsData, qnt)"
                                                      class="center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                                      Add to Cart
                                                </button>
                                          </div>
                                          <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                                <button
                                                      class="center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                                      Add to wishlist
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/cartStore";
import { useFetchStore } from "~/store/fetchPost";

interface PostDetails {
      category: string
      description: string
      id: number
      images: string[]
      price: number
      rating: number
      title: string
      quantity: number
      stock: number
      brand: string
      thumbnail: string
      discountPercentage: number
}
definePageMeta({
      middleware: "auth"
})

const route = useRoute()
const productStore = useFetchStore()
const { addCartItem } = useCartStore()
const qnt = ref(1)

function increse(){
      qnt.value += 1
}
function decrese(){
      if(qnt.value !== 1){
            qnt.value -= 1
      }
}

let productsData = toRaw(productStore.productsData)[route.params.id - 1]
if(!productsData){
      console.log('call')
      const { data } = await useAsyncData('storeData', () => $fetch(`https://dummyjson.com/products/${route.params.id}`))
      productsData = data.value as PostDetails
}


</script>