// Task 1: Interfaces
// Task 3: Never Type
// Write a function 'throwError' that takes a message (string) and never returns.
function throwError(message) {
    // Your code here
    throw new Error('hmm');
}
// Task 4: Unknown
// Create a function 'parseJSON' that takes a JSON string and returns the parsed object.
// The input may not be valid JSON, so handle it using the 'unknown' type.
function parseJSON(jsonString) {
    // Your code here
    if (typeof jsonString !== 'string') {
        throw new Error('value is not a string');
    }
    var data = JSON.parse(jsonString);
    return data;
}
// Task 5: Any
// Create a function 'add' that takes two parameters of any type and returns their sum.
// Use the 'any' type for the parameters and return type.
function add(a, b) {
    // Your code here
    var c = a + b;
    return c;
}
// Test Cases
// Task 1 Test
var person = { name: 'Alice', age: 30 };
console.log(person); // Expected output: { name: 'Alice', age: 30 }
// Task 2 Test
var point = { x: 5, y: 10 };
console.log(point); // Expected output: { x: 5, y: 10 }
// Task 3 Test
try {
    throwError('This is an error');
}
catch (error) {
    console.error(error); // Expected output: "This is an error"
}
// Task 4 Test
var validJSON = '{"key": "value"}';
var invalidJSON = 'not a valid JSON';
console.log(parseJSON(validJSON)); // Expected output: { key: 'value' }
console.log(parseJSON(invalidJSON)); // Expected output: undefined (due to 'unknown' type)
// Task 5 Test
var result1 = add(5, 10); // Expected output: 15
var result2 = add('Hello, ', 'world!'); // Expected output: 'Hello, world!'
console.log(result1);
console.log(result2);
