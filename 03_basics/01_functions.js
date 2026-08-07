// A function is a reusable block of code that performs a specific
//  task. Instead of writing the same code multiple times, you write it once in a 
//  function and call it whenever needed.


function saymyname(){
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
}

//saymyname(); // Calling the function to execute its code

// function addtwonumbers(num1, num2){
//     console.log(num1 + num2);
// }   



function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
    //console.log("This line will not be executed because it comes after the return statement.");
}

const result = addTwoNumbers(3, 5);
//console.log("Result:", result);
//addtwonumbers(5, 10); // Calling the function with arguments 5 and 10


function loginUserMessage(username="User") { // Default parameter value is "User"
    if (!username) {
        return "Please provide a username";
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("")); // Calling the function with an empty string as the argument so 
                                    // output will be "Please provide a username"
//console.log(loginUserMessage()); // Calling the function with the argument "Neha"








//Rest parameter
// Anything that can be passed as a function argument:
// ✅ Numbers
// ✅ Strings
// ✅ Booleans
// ✅ Objects
// ✅ Arrays
// ✅ Functions
// ✅ Mixed data types

// The rest operator collects all remaining arguments into a single array.

function calculateAllitemns(...num){ // Rest parameter syntax allows us to pass an indefinite number of arguments as an array
    return num
}
//console.log(calculateAllitemns(1,2,3,4,5,6,7,8,9,10)); // This will return an array of all the numbers passed as arguments




const user = {
    username : "Neha",
    price : 200,
}

function handle(user){
    console.log(`Username is ${user.username} and price is ${user.price}`)
}

handle(user);
