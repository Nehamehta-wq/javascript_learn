//reduce() is a higher-order array method used to combine all elements of an array into one final value.
//The final value can be a number, string, object, array, etc.

// 1. Pehle syntax samjho:
                        // array.reduce((accumulator, currentValue) => {
                        //     return something;
                        // }, initialValue);

// Example:
                // numbers.reduce((acc, curr) => {
                //     return acc + curr;
                // }, 0);

// Yahan:
// acc = Accumulator
// Ye ab tak ka result store karta hai.

// curr = Current value
// Ye array ka current element hai.

// 0
// Ye initial value hai.
// Matlab starting mein:
// acc = 0



//agr initial value nhi di gyi hai toh acc=1 vrna 0

//* ******************************************************************************************************


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)





const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);







const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);