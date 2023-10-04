// Topic 1: Type Casting and Inference
// ? Each task for 1 marks

// Task 1: Define a variable 'age' with an inferred type of number and assign it the value 25.
let age = 25;
// ! Score: 1

// Task 2: Cast the variable 'age' to a string type and store it in a variable 'ageStr'.
let ageStr =  age as string
// ! Score: 1

// Topic 2: Explicit Types

// Task 3: Create a variable 'person' with an explicit type definition.
// The person object should have properties 'name' (string) and 'age' (number).
type Person = {
  name:string,
  age:number
}
let person :Person  = {
  // Your code here
  name:'Ram',
  age:45,
};
// ! Score: 0.5

// Task 4: Create a function 'calculateArea' that takes two parameters:
// 'radius' (number) and 'pi' (number).
// The function should return the area of a circle using the formula: area = pi * radius^2.
function calculateArea(radius:number,pi:number): number {
  // Your code here
  return pi*Math.pow(radius,2)
}
// ! Score: 1

// Topic 3: Types Composition

// Task 5: Define a type 'Address' that represents a postal address.
// The type should have properties 'street' (string), 'city' (string), and 'zipcode' (string).
type Address = {
  street:string,
  city:string,
  zipcode:string
};
// ! Score: 1

// Task 6: Create a type 'PersonWithAddress' by combining the 'person' and 'Address' types.
type PersonWithAddress = Person| Address;
// ! Score: 0

// Topic 4: Static Type Checking

// Task 7: Attempt to assign a boolean value 'true' to the variable 'age'.
// Observe how TypeScript performs static type checking.
age = true  ;
// ! Score: 1
// Topic 5: Structural Typing

// Task 8: Define an interface 'Shape' with a property 'name' (string).
interface Shape {
  name:string
}
// ! Score: 1

// Task 9: Create an object 'circle' that has a 'name' property.
const circle: Shape/* Your code here */ = {
  /* Your code here */
  name:'xyz'
};
// ! Score: 1

// Task 10: Create a function 'printShapeName' that takes a parameter 'shape' of type 'Shape'.
// The function should print the 'name' property of the 'shape' object.
function printShapeName(shape:Shape) {
  return shape
}
// ! Score: 0


// Topic 6: Type Narrowing

// Task 11: Create a function 'printExtendedAddress' that takes a parameter 'personWithAddress' of type 'PersonWithAddress'.
// Inside the function, use type narrowing to check if the 'personWithAddress' has an 'extendedAddress' property.
// If it does, print the 'extendedAddress'; otherwise, print "No extended address."
function printExtendedAddress(personWithAddress :PersonWithAddress) {
  // Your code here
  if(personWithAddress.hasOwnProperty('extendedAddress')){
    return personWithAddress.extendedAddress
  }else return "No extended address."
}
// ! Score: 0


// Topic 7: Type Manipulation

// Task 12: Create a utility type 'Nullable' that takes a type parameter and makes it nullable.
// For example, if you pass 'string' to 'Nullable', it should return 'string | null'.
type Nullable<T> = {parameter:T|null};
// ! Score: 0

// Task 13: Use the 'Nullable' utility type to define a variable 'nullableName' that can be a string or null.
let nullableName: Nullable<string>;
// ! Score: 0

// Task 14: Create a function 'getLength' that takes a parameter 'input' of type 'string | string[]'.
// Inside the function, use type manipulation to determine if 'input' is a string or an array of strings.
// If it's a string, return its length; if it's an array of strings, return the sum of their lengths.
function getLength(input :string|string[]): number {
  // Your code here
  let count = 0
  if( input as string){
    return input.length
  }
  else 
  for(let i =0;i<=input.length;i++){
    count += i
  }
  return count
}
// ! Score: 0

// Task 15: Define a type 'KeyValuePair' that represents a key-value pair.
// The type should have two properties: 'key' of type string and 'value' of type T (a type parameter).
type KeyValuePair<T> = {
  key :string,
  value:T
};
// ! Score: 1

// Task 16: Create an object 'personData' that contains a key-value pair with 'key' as 'name' and 'value' as 'John'.
const personData: KeyValuePair<string> = {
  /* Your code here */
  key:'name',
  value:'Jhon'
};
// ! Score: 1

// Task 17: Create a function 'getValueByKey' that takes two parameters: 'data' of type 'T[]' (an array of KeyValuePair)
// and 'key' of type string. The function should return the 'value' corresponding to the given 'key'.
function getValueByKey<T>(data:T[],key:string) {
  // Your code here
  return key
}
// ! Score: 0

