// Task 1: Generics

// Create a generic function called 'reverseArray' that takes an array of any type and returns the reversed array.
function reverseArray<T>(arr: T[]): T[] {
  // Your code here
}

// Task 2: Utility Types

// Create a utility type 'OptionalProps' that makes all properties of an object optional.
type OptionalProps<T> = {
  // Your code here
};

// Task 3: Function Types Expression

// Declare a type 'BinaryFunction' that represents a function that takes two numbers and returns a number.
// Use a function expression to define the type.
// Your code here

// Task 4: Type Predicates

// Write a type predicate function called 'isEven' that checks if a number is even.
function isEven(num: number): boolean {
  // Your code here
}

// Task 5: Classes

// Create a class 'Person' with properties 'name' (string) and 'age' (number).
// Add a constructor to initialize these properties and a method 'sayHello' that returns a greeting.
class Person {
  // Your code here
}

// Task 6: Enums

// Create an enum called 'Direction' with values 'North', 'South', 'East', and 'West'.
// Your code here

// Test Cases

// Task 1 Test
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Expected output: [5, 4, 3, 2, 1]

// Task 2 Test
type ExampleProps = {
  name: string;
  age: number;
};
type OptionalExampleProps = OptionalProps<ExampleProps>;
const optionalProps: OptionalExampleProps = {}; // Should allow empty object

// Task 3 Test
const add: BinaryFunction = (a, b) => a + b;

// Task 4 Test
console.log(isEven(4)); // Expected output: true

// Task 5 Test
const person = new Person('Alice', 30);
console.log(person.sayHello()); // Expected output: "Hello, my name is Alice and I am 30 years old."

// Task 6 Test
const direction: Direction = Direction.North;
console.log(direction); // Expected output: "North"
