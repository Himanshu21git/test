### Promises

**Task 1: Async Function**
Write an asynchronous function called `fetchData` that simulates fetching data from an API. It should return a resolved promise with the data "Hello, World!" after a 1-second delay.

**Task 2: Error Handling**
Modify the `fetchData` function to handle errors. If an error occurs during the data fetching process, the function should reject the promise with an error message "Failed to fetch data" after a 1-second delay.

**Task 3: Multiple Async Calls**
Write an async function called `fetchMultipleData` that fetches data from two different API endpoints concurrently using `Promise.all`. The two API calls should be made simultaneously, and the function should return an array containing the results of both calls. Assume that the API calls return strings.

**Task 4: Error Handling with Promise.all**
Enhance the `fetchMultipleData` function to handle errors gracefully. If any of the API calls fail (reject), the function should immediately reject with an error message "One or more requests failed." Ensure that the function still fetches data from all endpoints concurrently.

**Task 5: Sequential Async Calls**
Write an async function called `fetchSequentialData` that fetches data from three different API endpoints sequentially (one after the other) using `await`. The function should return an array containing the results of all three calls. Assume that the API calls return strings.

**Task 6: Race Condition**
Explain what a race condition is in the context of asynchronous programming, and provide an example of a situation where a race condition could occur in a TypeScript/JavaScript application. Suggest how to prevent or handle such a race condition.

**Task 7: Code Review**
Review the following TypeScript code snippet and identify any potential issues or improvements:

```typescript
async function processItems(items: string[]): Promise<string[]> {
  const results: string[] = [];

  items.forEach(async (item) => {
    const processedItem = await processItem(item);
    results.push(processedItem);
  });

  return results;
}
```

**Note**: You may use jsonplaceholder APIs for dummy APIs.
