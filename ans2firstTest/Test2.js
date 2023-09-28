// Task 1: Array Methods

// Given an array of objects representing books, find the average rating of all books in the array.
// Each book object has properties: title (string) and rating (number).
function averageRating(books) {
    // Your code here
    let totalRat = 0;
    const size = books.length;
    books.map(({title,rating})=> totalRat+=rating);
    return totalRat/size;
    
  }
  // ! Score: 1.5
  
  // Task 2: Object Methods
  
  // Create a class called 'Product' with properties 'name', 'price', and 'quantity'.
  // Add methods to calculate the total price (price * quantity) and to display product information.
  class Product {
    // Your code her
    constructor(name, price, quantity){
      this.name = name ;
      this.price = price ;
      this.quantity=  quantity;
    }
    getTotalPrice(){
      return  `output: ${this.price*this.quantity}`
    }
    displayInfo(){
      return `"Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}"`;
    }
  }
  // ! Score: 2
  
  // Task 3: Lambda Functions
  
  // Write a function that takes an array of numbers and a callback function.
  // The callback function should be applied to each number in the array, and the result should be returned in a new array.
  function applyCallback(arr, callback) {
    // Your code here
    return arr.map(el=> callback(el))
  }
  // ! Score: 2
  
  // Task 4: Promises, Async, and Await
  
  // Create an async function called 'fetchMultipleData' that fetches data from multiple URLs concurrently using Promise.all.
  // The function should accept an array of URLs and return an array of JSON responses.
  async function fetchMultipleData(urls) {
    // Your code here
    try{
      const responses  = Promise.all(urls.map(url=> fetch(url)));
      for(let response in responses){
        if(!response.ok){
          throw new Error('Eroro');
        }
      }
    }catch(err){
      console.log(err);
    }
  }
  // ! Score: 0
  
  // Task 5: Functional Programming
  
  // Given an array of objects representing students, filter the students who have passed the exam (score >= 60).
  // Then, calculate the average score of the passing students using functional programming concepts.
  function averagePassingScore(students) {
    // Your code here
    let totalScore = 0;
    let size = 0;
    students.map(({name,score})=>{
      if(score>=60){
        totalScore+=score;
        size+=1;
      }
    });
    return totalScore/size;
  }
    // ! Score: 1
  
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
  