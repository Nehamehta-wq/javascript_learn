//HIGH ORDER ARRAY LOOPS
//A higher-order array method is a method that takes a function as an argument or returns a function.



//******************************************************************************************************** 

// for of
//The for...of loop is used to iterate over the values of an iterable, such as an array, string, Set, or Map.
//you directly get the value.
// ["", "", ""]
// [{}, {}, {}] onject in array

//syntax:
// for (let variable of iterable) {
//     code
// }

//Example:
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    //console.log(fruit);
}
                            // Here:
                            // fruits → array
                            // fruit → gets each value from the array
                            // of → tells JavaScript to take values from fruits






//A string is also iterable:
let name = "Neha";
for (let char of name) {
    //console.log(char);
}                 





const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}







const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//*****************************************************************************************




// Maps
//a Map can use different types of keys(string, num etc)
//set(), get(), has(), delete(), size()


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}







//************************************************************************************************************
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

                                        // Why doesn't this work?
                                        // Because a normal JavaScript object is not iterable.
                                        // for...of requires an iterable, such as:
                                                                                // Array
                                                                                // String
                                                                                // Map
                                                                                // Set

                                        // A normal object {} is not directly iterable.



//Solution: Use Object.entries(). It converts the object into an array of key-value pairs

const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of Object.entries(myObject1)) {
    console.log(key, ':-', value);
}
//************************************************************************************************************


