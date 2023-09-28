// Task 1: Array Methods

// Given an array of numbers, use Array methods to find the sum of all even numbers in the array.
function sumEvenNumbers(arr) {
    // Your code here
    let res = 0
    return arr.filter(a=> a%2===0).reduce((res,el)=> {return res+el;})
  }
  // ! Score: 1
  
  // Task 2: Object Methods
  
  // Create an object called 'person' with properties 'name', 'age', and 'job'.
  // Add a method 'introduce' that returns a string introducing the person.
  const person = {
    // Your code here
    'name' : 'Aman',
    'age':222,
    'job':'Trainee',
    introduce:function(){
      return `Hi, I'm ${this.name} ${this.age} old and I'm a ${this.job} `;
    }
  };
    // ! Score: 2
  
  // Task 3: Lambda Functions
  
  // Write a lambda function (arrow function) that takes two parameters and returns their sum.
  const add = (a, b) => a+b;
    // ! Score: 2

  
  // Task 4: Promises, Async, and Await
  
  // Write an async function called 'fetchData' that fetches data from a given URL using fetch.
  // Handle any errors that may occur during the fetch using try-catch and return the data as JSON.
  async function fetchData(url) {
    try{
      const data = await fetch(url)
      if(!data.ok){
        throw new Error('Data Error');
      }
      const res = await data.json();
      return res;
    }catch(err){
      console.log(err);
    }
  }
  // ! Score: 1
  
  // Task 5: Functional Programming
  
  // Given an array of numbers, write a function that returns a new array containing
  // the squares of the positive numbers in the original array, using functional programming concepts.
  function squarePositiveNumbers(arr) {
    // Your code here
    return arr.filter((a)=>a>=0).map((a)=> a*a)
  }
  // ! Score: 1
  
  // Test Cases
  
  // Task 1 Test
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected output: 12
  
  // Task 2 Test
  console.log(person.introduce()); // Expected output: "Hi, I'm [name], I'm [age] years old, and I work as a [job]."
  
  // Task 3 Test
  console.log(add(5, 7)); // Expected output: 12
  
  // Task 4 Test
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // Task 5 Test
  console.log(squarePositiveNumbers([1, -2, 3, -4, 5])); // Expected output: [1, 9, 25]
  
  