/* Task 1: Async Function Write an asynchronous function called fetchData that simulates fetching data from an API.
 It should return a resolved promise with the data "Hello, World!" after a 1-second delay.
*/
/*
Task 2: Error Handling Modify the fetchData function to handle errors. If an error occurs during the data fetching process,
 the function should reject the promise with an error message "Failed to fetch data" after a 1-second delay.
*/
async function fetchData(url){
    const data = await fetch(url).then((el)=> el.json())
    const promise = new Promise((resolve)=>{

        setTimeout(()=>{
                resolve(data);
            
        },1000)
    })     
    console.log('Hello, World!')
    return promise;
}
fetchData('https://fakestoreapi.com/products/6')
        .then((res)=> console.log(res))
        .catch((err)=>console.log(err));



/*
Task 3: Multiple Async Calls Write an async function called fetchMultipleData that fetches data from two different API endpoints 
concurrently using Promise.all. The two API calls should be made simultaneously, and the function should return an array 
containing the results of both calls. Assume that the API calls return strings.
*//*
Task 4: Error Handling with Promise.all Enhance the fetchMultipleData function to handle errors gracefully. If any of the API 
calls fail (reject), the function should immediately reject with an error message "One or more requests failed." Ensure that the
 function still fetches data from all endpoints concurrently.
*/
async function fetchMultipleData(urls){
    //  const arrData = [];
  
         const promises =  Promise.all(
          urls.map(async (url)=>{
                const singleData = await fetch(url).then((el)=>el.json())
                return singleData;
            })
            
         )
        return promises
}
setTimeout(async () => {
    try {
        const result = await fetchMultipleData([
            'https://fakestoreapi.com/products/1',
            'https://fakestoreapi.com/products/9',
        ]);
        console.log(result);
       
    } catch (err) {
        console.error(err);
    }
}, 1000);

/*
Task 5: Sequential Async Calls Write an async function called fetchSequentialData that fetches data from three different API 
endpoints sequentially (one after the other) using await. The function should return an array containing the results of all 
three calls. Assume that the API calls return strings.
*/


async function fetchSequentialData(urls) {

    const returnedData = [];

    await urls.map(async (url) => {
        const dummy = await fetch(url)
        const data = await dummy.json()
        console.log(data)
        returnedData.push(data)
    })
}
const urls = ['https://fakestoreapi.com/products/1','https://jsonplaceholder.typicode.com/2','https://dummyjson.com/products/1']
setTimeout(async () => {await fetchSequentialData(urls)}, 1000)

/*
Task 6: Race Condition Explain what a race condition is in the context of asynchronous programming, and provide an example 
of a situation where a race condition could occur in a TypeScript/JavaScript application. Suggest how to prevent or handle 
such a race condition.
*/
    //ANSWER 
    /**
     * As we know that race condition occurs when we are working with the multithread or can say more than one thread ,
     * And we know that JavaScript is a single threaded programming language. So there is rarely chance that when we get 
     * race condition. Race condition can occur in JavaScript like
     * 
     * If We've created a searchbox where user can search for the information related to the need of users wants,
     * If user started typing then multiple api run simultaneously and api that match's the most similar to the user's or faster 
     * related topic or information that He/She is looking for comes first to the API.
     *  
     * Similar thing we can do with the help of Promice.race() function 
     * According to this  Promise.race() static method takes an interable of promises as input  and returns  a single Promise. 
     * This returne promise settles with teh eventual state of the first promise that settles. 
     * 
     * const p1 = new Promise((resolve)=>{
     * setTimeout(resolve,500,'One')});
     * 
     * const p2 = new Promise((resolve,reject)=>{
     *  setTimeout(resolve,100,'two');
     * })
     * Promise.race([p1,p2]).then((value)=>{
     * console.log(value)})
     * 
     */
/*
Task 7: Code Review Review the following TypeScript code snippet and identify any potential issues or improvements:
*/

// async function processItems(items: string[]): Promise<string[]> {
//   const results: string[] = [];

//   items.forEach(async (item) => {
//     const processedItem = await processItem(item);
//     results.push(processedItem);
//   });

//   return results;
// }

