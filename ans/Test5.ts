// Task 1: Generics

// Create a generic function called 'reverseArray' that takes an array of any type and returns the reversed array.
function reverseArray<T>(arr: T[]): T[] {
  // Your code here
  return arr.reverse()
}

// Task 2: Utility Types

// Create a utility type 'OptionalProps' that makes all properties of an object optional.
type OptionalProps<T> = {
  T ?: T;
};


// Task 3: Function Types Expression

// Declare a type 'BinaryFunction' that represents a function that takes two numbers and returns a number.
// Use a function expression to define the type.
// Your code here
type BinaryFunction = (a: number, b:number) => number

// Task 4: Type Predicates

// Write a type predicate function called 'isEven' that checks if a number is even.
function isEven(num: number): boolean {
  return (num%2===0)
}

// Task 5: Classes

// Create a class 'Person' with properties 'name' (string) and 'age' (number).
// Add a constructor to initialize these properties and a method 'sayHello' that returns a greeting.
class Person {
  // Your code here
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name = name,
    this.age = age
  }
  sayHello(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}

// Task 6: Enums

// Create an enum called 'Direction' with values 'North', 'South', 'East', and 'West'.
// Your code here
enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West',
}

// Test Cases

// Task 1 Test
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Expected output: [5, 4, 3, 2, 1]

// // Task 2 Test
type ExampleProps = {
  name: string;
  age: number;
};
type OptionalExampleProps = OptionalProps<ExampleProps>;
const optionalProps: OptionalExampleProps = {}; // Should allow empty object
console.log(optionalProps);

// // Task 3 Test
const add: BinaryFunction = (a, b) => a + b;
console.log(add(4,5));

// // Task 4 Test
console.log(isEven(4)); // Expected output: true

// // Task 5 Test
const person = new Person('Alice', 30);
console.log(person.sayHello()); // Expected output: "Hello, my name is Alice and I am 30 years old."

// // Task 6 Test
const direction: Direction = Direction.North;
console.log(direction); // Expected output: "North"
