// // Task 1: Generics
// Create a generic function called 'reverseArray' that takes an array of any type and returns the reversed array.
function reverseArray(arr) {
    // Your code here
    if (arr.length > 0) {
        return arr.reverse();
    }
    return [];
}
// Task 4: Type Predicates
//   Write a type predicate function called 'isEven' that checks if a number is even.
function isEven(num) {
    // Your code here
    return num % 2 === 0 ? true : false;
}
//   Task 5: Classes
//   Create a class 'Person' with properties 'name' (string) and 'age' (number).
//   Add a constructor to initialize these properties and a method 'sayHello' that returns a greeting.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "My name ".concat(this.name, " and I'm ").concat(this.age);
    };
    return Person;
}());
console.log("North" /* Direction.North */);
// Test Cases
// Task 1 Test
var originalArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Expected output: [5, 4, 3, 2, 1]
var optionalProps = {}; // Should allow empty object
//   Task 3 Test
var add = function (a, b) { return a + b; };
console.log(add(5, 2));
//   Task 4 Test
console.log(isEven(3)); // Expected output: true
//   Task 5 Test
var person = new Person('Alice', 30);
console.log(person.sayHello()); // Expected output: "Hello, my name is Alice and I am 30 years old."
// Task 6 Test
var direction = "North" /* Direction.North */;
console.log(direction); // Expected output: "North"
