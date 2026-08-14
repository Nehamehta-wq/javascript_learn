
// Abhi jis object ke andar function execute ho raha hai, wahi current context hai.
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Neha";
// user.welcomeMessage();
// console.log(this);



// function chai(){
//     console.log(this);
// }
// chai();






//:::::::::::::::::::::::::::::::::::::::::::::::::::::::Arrow Function::::::::::::::::::::::::::::::::
// const chai=()=>{
//     let username="Neha"
//     console.log(this.username);
//     // console.log(this);
// }

// chai();






// const addtwo=(num1, num2) => {
//     return num1+num2;
// }
// console.log(addtwo(2, 3));








// const square = x => (x * x);        // ✅ returns

// const square = x => {
//     return x * x;                 // ✅ returns
// };

// const square = x => {
//     x * x;                        // ❌ undefined
// };








// ::::::::::::::::::✅ Object return karne ke liye () lagao::::::::::::

// const getUser = () => ({
//     name: "Neha",
//     age: 20
// });

// console.log(getUser());





//::::::::::::::::::::::::::Curly braces ke saath explicit return::::::::::::

const users = () => {
    return {
        name: "Neha"
    };
};

console.log(users());