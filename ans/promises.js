// Task 1 and 2

async function fetchData(url) {
    const promise =  new Promise((res, rej) => {
      console.log("Hello World")
      setTimeout(async () => {
        try {
          const result = await fetch(url)
          const data = await result.json()
          // console.log(data)
          res(data)
        } catch (error) {
          rej("Failed to fetch data")
        }
      }, 1000)
    })
    return promise
  }
  
  let url = "https://jsonplaceholder.typicode.com/posts/1"
  async function main1(url) {
    try {
      const data = await fetchData(url);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // main1(url)
  
  
  // Task 3 and 4
  
  async function fetchMultipleData(urls) {
    try {
      const responses = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        })
      );
      return responses;
    } catch (error) {
      throw new Error(`One or more requests failed`);
    }
  }
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/comments/78",
  ];
  async function main2(urls) {
    try {
      const data = await fetchMultipleData(urls);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // main2(urls)
  
  
  // Task 5
  async function fetchSequentialData(url) {
    const promise = new Promise((res, rej) => {
      console.log("Hello World");
      setTimeout(async () => {
        try {
          const result1 = await fetch(url[0]);
          const data1 = await result1.json();
          const result2 = await fetch(url[1]);
          const data2 = await result2.json();
          const result3 = await fetch(url[2]);
          const data3 = await result3.json();
         
          res([data1, data2, data3]);
        } catch (error) {
          rej("Failed to fetch data");
        }
      }, 1000);
    });
    return promise;
  }
  
  let urls2 = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  async function main3(urls) {
    try {
      const data = await fetchSequentialData(urls);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // main3(urls2)
  
  // Task6
  
  
  // Promise.race([main2(urls), main1(url)]).then((value) => {
  //   console.log(value);
   
  // });
  
  
  // Task 7
  
  /*  
  async function processItems(items: string[]): Promise<string[]> {
    const results: string[] = [];
  
    items.forEach(async (item) => {
      const processedItem = await processItem(item);
      results.push(processedItem);
    });
  
    return results;
  }
  */
  
  
  
  /* we should use map function rather than forEach as forEach doen't work asyncronously
  also can return directly without pushing it in a variable */
  