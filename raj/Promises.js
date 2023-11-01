// **Task 1: Async Function**
// Write an asynchronous function called `fetchData` that simulates fetching data from an API. 
// It should return a resolved promise with the data "Hello, World!" after a 1-second delay.
async function fetchData1(){

        const result = new Promise( (res , rej) => {
            setTimeout( ()=> res( "Hello, World!" ) , 1000)
        });
        return result;

}

// **Task 2: Error Handling**
// Modify the `fetchData` function to handle errors. If an error occurs during the data fetching process, the function should reject the promise with an error message "Failed to fetch data" after a 1-second delay.
async function fetchData(){
        const result = new Promise( (res , rej) => {
            setTimeout( ()=> rej( "Failed to fetch data" ) , 1000  )
        });
        return result;

}

fetchData()
.then( (result) => console.log( result ))
.catch( (e) => console.error(e))


// **Task 3: Multiple Async Calls**
async function fetchMultipleData(urls){
    
        const responses =  Promise.all( 
            urls.map( async (url) => {

                const data = await fetch(url);
                return await data.json();
        
        }));
        return responses;
}

// **Task 4: Error Handling with Promise.all**
async function fetchMultipleData(urls){
    try {
  
        const responses = await Promise.all( 
            urls.map( async (url) => {

                const data = await fetch(url);
                return await data.json();
        
        }));
        console.log(responses)
        return responses;
        
      } catch (error) {
        console.log( "One or more requests failed." )
      }
}
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
];
// fetchMultipleData(urls)
// .then((data) => console.log(data))


/*      **Task 5: Sequential Async Calls**     */
async function datafetch(url){
    const data = await fetch(url);
    return await data.json();
}
async function fetchSequentialData(apis){
try {
    
    const result = [];
    for (const url of apis) {
        
        result.push( await datafetch(url) )
    }
    return result;
} catch (error) {
    console.log("Featching Failed")
}
}

const apis = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
  ];

fetchSequentialData(apis)
.then((result) => console.log(result))