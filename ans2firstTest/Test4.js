// Topic 1: Type Casting and Inference
// Task 1: Define a variable 'age' with an inferred type of number and assign it the value 25.
var age = 25;
// Task 2: Cast the variable 'age' to a string type and store it in a variable 'ageStr'.
var ageStr = age;
// Topic 2: Explicit Types
// Task 3: Create a variable 'person' with an explicit type definition.  
// The person object should have properties 'name' (string) and 'age' (number).
var person = {
    name: string,
    age: number
    // Your code here
};
// Task 4: Create a function 'calculateArea' that takes two parameters:
// 'radius' (number) and 'pi' (number).
// The function should return the area of a circle using the formula: area = pi * radius^2.
function calculateArea(radius, pi) {
    // Your code herer
    return (pi * radius * radius);
}
// Topic 4: Static Type Checking
// Task 7: Attempt to assign a boolean value 'true' to the variable 'age'.
// Observe how TypeScript performs static type checking.
age = true /* Your code here */;
// Task 9: Create an object 'circle' that has a 'name' property.
var circle /* Your code here */ = {
    name: 'Aman'
    /* Your code here */
};
// Task 10: Create a function 'printShapeName' that takes a parameter 'shape' of type 'Shape'.
// The function should print the 'name' property of the 'shape' object.
function printShapeName(shape) {
    // Your code here
    return shape.name;
}
// Topic 6: Type Narrowing
// Task 11: Create a function 'printExtendedAddress' that takes a parameter 'personWithAddress' of type 'PersonWithAddress'.
// Inside the function, use type narrowing to check if the 'personWithAddress' has an 'extendedAddress' property.
// If it does, print the 'extendedAddress'; otherwise, print "No extended address."
function printExtendedAddress(personWithAddress) {
    // Your code here
    if ('extendedAddress' in personWithAddress) {
        console.log("extended Address");
    }
    else {
        console.log("NO extended address");
    }
}
// Task 13: Use the 'Nullable' utility type to define a variable 'nullableName' that can be a string or null.
var nullableName; /* Your code here */
;
// Task 14: Create a function 'getLength' that takes a parameter 'input' of type 'string | string[]'.
// Inside the function, use type manipulation to determine if 'input' is a string or an array of strings.
// If it's a string, return its length; if it's an array of strings, return the sum of their lengths.
function getLength(input) {
    // let len =0;
    if (typeof input === 'string') {
        return input.length;
    }
    else if (typeof input === 'object') {
        return input.reduce(function (len, el) {
            len += (typeof el === 'string') ? el.length : el.length;
        }, 0);
    }
    // Task 16: Create an object 'personData' that contains a key-value pair with 'key' as 'name' and 'value' as 'John'.
    var personData = {
        /* Your code here */
        key: "Name",
        value: "John"
    };
    // Your code here
    return data.key;
}
