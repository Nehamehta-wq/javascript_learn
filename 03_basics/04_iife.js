// IIFE = Immediately Invoked Function Expression.
// Naam bada hai 😄, concept bahut simple hai:
// Function banao aur usi time execute (call) kar do.

//::::::::::::::::::::Normal function::::::::::::::::::::::::::::::::::::::
function chai1() {
    console.log("normal");
}
chai1();
//:::::::::::::::::::::::::::::: Pehle function banaya → phir chai() se call kiya:::::::::::::



//::::::::::::::::::::::::::::::::::iife::::::::::::::::::::::::::::::::::::::::::::
(function chai2() {
    console.log("iife");
})();
//:::::::::::::::::::::::::::Yahan function banate hi turant execute ho gaya:::::::::::::::::::::::





// ::::::::::::::::::::Arrow function ke saath IIFE 🔥::::::::::::::::::::::::::::::::::
(() => {
    console.log("arrow function k sath IIFE");
})();







( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
