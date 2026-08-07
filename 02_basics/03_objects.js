// object literals= simple way to create objects in JavaScript


const symbol = Symbol("id"); // symbol is a unique and immutable primitive value and may be used as the key of an object property
//even if we create another symbol with the same description, it will be a different symbol

const person = {
  name: "John",   // the key is name and the value is John
  age: 30,        // key is considered as a string, so we can use quotes or not and value can be anything
//   symbol: "s1", // Here, symbol is treated as a normal string key "symbol", not the Symbol variable.
[symbol]: "s1", // Here, we are using the symbol variable as a key, so it will be a unique key in the object
  location: "New York",
  "full name": "John Doe", // key with space in it, so we need to use quotes
  email: "john@example.com",
  lastLogin: [1, 2, 3],
}
// console.log(person.name); // John
// console.log(person["age"]); // 30
// console.log(person["full name"]); // only way to access key with space in it
// console.log(typeof person.symbol); 
// console.log(person[symbol]); // s1





// Object.freeze(person); // freeze the object, so we cannot add, delete or modify any property of the object


person.gretting = function() { // we can add methods to the object
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // 1
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`; //2
}
// console.log(person.gretting()); // Hello, my name is John and I am 30 years old. // 1 or 2nd
//person.gretting(); // Hello, my name is John and I am 30 years old. // 1








