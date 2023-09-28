// Task 1: Array Methods

// Given an array of objects representing books, find the average rating of all books in the array.
// Each book object has properties: title (string) and rating (number).
function averageRating(books) {
    let ans = books.reduce((e,book) => (e+book.rating), 0)
    return ans/books.length
  }
  
  // Task 2: Object Methods
  
  // Create a class called 'Product' with properties 'name', 'price', and 'quantity'.
  // Add methods to calculate the total price (price * quantity) and to display product information.
  class Product {
    constructor(name,price,quality){
        this.name = name,
        this.price = price,
        this.quality=quality;
    }
    getTotalPrice(){
        return this.price*this.quality
    }
    displayInfo(){
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quality}` 
    }


  }
  
  // Task 3: Lambda Functions
  
  // Write a function that takes an array of numbers and a callback function.
  // The callback function should be applied to each number in the array, and the result should be returned in a new array.
  function applyCallback(arr, callback) {
    let ans = []
    for(let i =0;i<=arr.length-1;i++){
        ans.push(callback(arr[i]))
        
    }
    return ans
  }
  
  // Task 4: Promises, Async, and Await
  
  // Create an async function called 'fetchMultipleData' that fetches data from multiple URLs concurrently using Promise.all.
  // The function should accept an array of URLs and return an array of JSON responses.
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
  
  // Task 5: Functional Programming
  
  // Given an array of objects representing students, filter the students who have passed the exam (score >= 60).
  // Then, calculate the average score of the passing students using functional programming concepts.
  function averagePassingScore(students) {
    let ans = students.filter(e=>e.score>=60)
    let avg = ans.reduce((e,student)=>(e+student.score),0)
    return avg/ans.length
  }
  
  // Test Cases
  
  // Task 1 Test
  const books = [
    { title: 'Book 1', rating: 4.5 },
    { title: 'Book 2', rating: 3.8 },
    { title: 'Book 3', rating: 4.2 },
  ];
  console.log(averageRating(books)); // Expected output: 4.166666666666667
  
  // Task 2 Test
  const product = new Product('Widget', 10, 3);
  console.log(product.getTotalPrice()); // Expected output: 30
  console.log(product.displayInfo()); // Expected output: "Product: Widget, Price: $10, Quantity: 3"
  
  // Task 3 Test
  const numbers = [1, 2, 3, 4, 5];
  const square = (x) => x * x;
  console.log(applyCallback(numbers, square)); // Expected output: [1, 4, 9, 16, 25]
  
  // Task 4 Test
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
  ];
  fetchMultipleData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Task 5 Test
  const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 45 },
    { name: 'Charlie', score: 70 },
    { name: 'David', score: 95 },
  ];
  console.log(averagePassingScore(students)); // Expected output: 85
  