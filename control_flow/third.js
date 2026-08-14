//JavaScript jab kisi value ko condition mein check karta hai, toh usse internally true ya false ki tarah treat karta hai.

//::::::::::::::::::::::::::::::Truthy:::::::::::::::::::::::::::::::::::::
//Jo value condition mein true ki tarah behave kare → Truthy

// if ("hello") {
//     console.log("Run");
// }
// Output: Run
// Because "hello" truthy hai.








//:::::::::::::::::::::::::::::::Falsy:::::::::::::::::::::::::::::::
//Jo value condition mein false ki tarah behave kare → Falsy

// if (0) {
//     console.log("Run");
// }
// Kuch print nahi hoga, because 0 falsy hai.














//:::::::::::::::::::JavaScript ki Falsy Values🚨::::::::::::::::::

//JavaScript mein mainly ye values falsy hain:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Example:
// if (false) {
//     console.log("Hello");
// }
// ❌ nahi chalega.

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// if (0) {
//     console.log("Hello");
// }
// ❌ nahi chalega.

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// if ("") {
//     console.log("Hello");
// }
// ❌ nahi chalega.

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// if (null) {
//     console.log("Hello");
// }
// ❌ nahi chalega.















//:::::::::::::::::::::::::::::::::::::::::::Truthy values::::::::::::::::::::::::::::::::::::::::

//Jo falsy nahi hai, woh truthy hai. 😄

// Examples:
// "hello"     // truthy
// "0"         // truthy
// "false"     // truthy
// 1           // truthy
// -1          // truthy
// []          // truthy
// {}          // truthy
// function(){} // truthy

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Bahut important ⚠️

// Empty string: ""
// ❌ Falsy

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Lekin empty array: []
// ✅ Truthy

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Aur empty object:{}
// ✅ Truthy


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



//::::::::::::::::::::Example with if:::::::::::
// let username = "";

// if (username) {
//     console.log("Username exists");
// } else {
//     console.log("Username is empty");
// }

// Output:Username is empty

// Because: ""
// is falsy.







//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 




// :::::::::::::::::::::::::::::::::::::::Agar::::::::::::::::::::::::::::::::::::::
// let username = "Neha";
// if (username) {
//     console.log("Username exists");
// }

// Output:Username exists
// Because "Neha" truthy hai.















// Nullish Coalescing Operator (??): null, undefined
//Agar left side ki value null ya undefined hai, tab right side ki value use karo

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

//console.log(val1);



//***********************************************************************************************************




// Terniary operator: condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")