const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // adds dc_heros array to the end of marvel_heros array
// console.log(marvel_heros) // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]


// const hero=marvel_heros.concat(dc_heros) // adds dc_heros array to the end of marvel_heros array, concat return new array
// console.log(hero) // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


const hero=[...marvel_heros, ...dc_heros] // adds dc_heros array to the end of marvel_heros array, spread operator return new
//  array so original array is not modified
// console.log(hero) // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// console.log(another_array); // original array is not modified



// console.log(Array.isArray("Neha")); 
// console.log(Array.from("Neha"));


let scores =100
let scores2 = 200
let scores3 = 300
console.log(Array.of(scores, scores2, scores3)); // [100, 200, 300]


let arr = [1, 2, 3, 4, 5]
// console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0, 5] (fills the array with 0 from index 2 to index 4)
// console.log(arr.fill(9)); // [9, 9, 9, 9, 9] (fills the entire array with 9)
