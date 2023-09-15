// Task 1: Interfaces

// Create an interface called 'Person' with properties 'name' (string) and 'age' (number).
interface Person {
  // Your code here
  name:string,
  age:number
}

// Task 2: Types

// Create a type called 'Point' that represents a 2D point with 'x' and 'y' coordinates, both numbers.
type Point = {
  // Your code here
  x:number,
  y:number;
};

// Task 3: Never Type

// Write a function 'throwError' that takes a message (string) and never returns.
function throwError(message: string): never {
  // Your code here
  throw new Error ('This is an error');
  
}

// Task 4: Unknown

// Create a function 'parseJSON' that takes a JSON string and returns the parsed object.
// The input may not be valid JSON, so handle it using the 'unknown' type.
function parseJSON(jsonString: string): unknown {
  // Your code here
  if(typeof jsonString === 'string'){
    return jsonString
  }else return `'undefined (due to 'unknown' type)'`
}

// Task 5: Any

// Create a function 'add' that takes two parameters of any type and returns their sum.
// Use the 'any' type for the parameters and return type.
function add(a: any, b: any): any {
  // Your code here
  return a+b
}

// Test Cases

// Task 1 Test
const person: Person = { name: 'Alice', age: 30 };
console.log(person); // Expected output: { name: 'Alice', age: 30 }

// Task 2 Test
const point: Point = { x: 5, y: 10 };
console.log(point); // Expected output: { x: 5, y: 10 }

// // Task 3 Test
// try {
//   throwError('This is an error');
// } catch (error) {
//   console.error(error); // Expected output: "This is an error"
// }

// // Task 4 Test
const validJSON = '{"key": "value"}';
const invalidJSON = 'not a valid JSON';

console.log(parseJSON(validJSON)); // Expected output: { key: 'value' }
console.log(parseJSON(invalidJSON)); // Expected output: undefined (due to 'unknown' type)

// Task 5 Test
const result1 = add(5, 10); // Expected output: 15
const result2 = add('Hello, ', 'world!'); // Expected output: 'Hello, world!'

console.log(result1);
console.log(result2);
