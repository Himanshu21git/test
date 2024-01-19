import {ref } from 'vue'

export function useFetch(url:string){
    const data = ref(null);
    const error = ref<unknown>(null);

    async function getData(){
        try {
            const res = await fetch(url);
            data.value = await res.json()

        } catch (e) {
            error.value = e;
        }
    }
    getData()
    return { data , error }
}