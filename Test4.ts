// Topic 1: Type Casting and Inference

// Task 1: Define a variable 'age' with an inferred type of number and assign it the value 25.
let age = /* Your code here */;

// Task 2: Cast the variable 'age' to a string type and store it in a variable 'ageStr'.
let ageStr = /* Your code here */;

// Topic 2: Explicit Types

// Task 3: Create a variable 'person' with an explicit type definition.
// The person object should have properties 'name' (string) and 'age' (number).
let person: /* Your code here */ = {
  // Your code here
};

// Task 4: Create a function 'calculateArea' that takes two parameters:
// 'radius' (number) and 'pi' (number).
// The function should return the area of a circle using the formula: area = pi * radius^2.
function calculateArea(/* Your code here */): /* Your code here */ {
  // Your code here
}

// Topic 3: Types Composition

// Task 5: Define a type 'Address' that represents a postal address.
// The type should have properties 'street' (string), 'city' (string), and 'zipcode' (string).
type Address = /* Your code here */;

// Task 6: Create a type 'PersonWithAddress' by combining the 'person' and 'Address' types.
type PersonWithAddress = /* Your code here */;

// Topic 4: Static Type Checking

// Task 7: Attempt to assign a boolean value 'true' to the variable 'age'.
// Observe how TypeScript performs static type checking.
age = /* Your code here */;

// Topic 5: Structural Typing

// Task 8: Define an interface 'Shape' with a property 'name' (string).
interface Shape {
  /* Your code here */
}

// Task 9: Create an object 'circle' that has a 'name' property.
const circle: /* Your code here */ = {
  /* Your code here */
};

// Task 10: Create a function 'printShapeName' that takes a parameter 'shape' of type 'Shape'.
// The function should print the 'name' property of the 'shape' object.
function printShapeName(/* Your code here */) {
  // Your code here
}

// Topic 6: Type Narrowing

// Task 11: Create a function 'printExtendedAddress' that takes a parameter 'personWithAddress' of type 'PersonWithAddress'.
// Inside the function, use type narrowing to check if the 'personWithAddress' has an 'extendedAddress' property.
// If it does, print the 'extendedAddress'; otherwise, print "No extended address."
function printExtendedAddress(/* Your code here */) {
  // Your code here
}

// Topic 7: Type Manipulation

// Task 12: Create a utility type 'Nullable' that takes a type parameter and makes it nullable.
// For example, if you pass 'string' to 'Nullable', it should return 'string | null'.
type Nullable<T> = /* Your code here */;

// Task 13: Use the 'Nullable' utility type to define a variable 'nullableName' that can be a string or null.
let nullableName: /* Your code here */;

// Task 14: Create a function 'getLength' that takes a parameter 'input' of type 'string | string[]'.
// Inside the function, use type manipulation to determine if 'input' is a string or an array of strings.
// If it's a string, return its length; if it's an array of strings, return the sum of their lengths.
function getLength(/* Your code here */): /* Your code here */ {
  // Your code here
}

// Task 15: Define a type 'KeyValuePair' that represents a key-value pair.
// The type should have two properties: 'key' of type string and 'value' of type T (a type parameter).
type KeyValuePair<T> = /* Your code here */;

// Task 16: Create an object 'personData' that contains a key-value pair with 'key' as 'name' and 'value' as 'John'.
const personData: /* Your code here */ = {
  /* Your code here */
};

// Task 17: Create a function 'getValueByKey' that takes two parameters: 'data' of type 'T[]' (an array of KeyValuePair)
// and 'key' of type string. The function should return the 'value' corresponding to the given 'key'.
function getValueByKey<T>(/* Your code here */): /* Your code here */ {
  // Your code here
}
