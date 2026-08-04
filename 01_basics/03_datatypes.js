// 1. Primitive Data Types (7)
// String->	Text-> "Hello"
// Number->	Integers and decimals->	10, 3.14
// Boolean->	True or False->	true, false
// Undefined->	Variable declared but not assigned->	let x;
// Null->	Intentionally empty value->	null
// BigInt->	Very large integers->	12345678901234567890n
// Symbol->	Unique identifier->	Symbol("id")

// 2. Non-Primitive (Reference) Data Types
// Object->	{name: "Neha", age: 21}
// Array->	["Apple", "Banana", "Mango"]
// Function->	function greet() {}


let name = "Neha";        // String
let age = 21;             // Number
let isStudent = true;     // Boolean
let city;                 // Undefined
let data = null;          // Null
let big = 12345678901234567890n; // BigInt
let id = Symbol("id");    // Symbol

// Object
let person = {
  name: "Neha",
  age: 21
};

// Array
let colors = ["Red", "Green", "Blue"];

// Function
function greet() {
  console.log("Hello");
}

console.log(typeof "Hello");     // string
console.log(typeof 100);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (this is a historical JavaScript bug)
console.log(typeof 123n);        // bigint
console.log(typeof Symbol());    // symbol
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function