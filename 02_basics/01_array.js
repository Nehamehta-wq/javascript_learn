const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
const arr3 = Array.of(1, 2, 3, 4, 5);
const arr4 = Array.from(arr1);
const arr5 = Array.from('hello');
const arr6 = Array.from({ length: 5 }, (_, index) => index + 1);


// console.log(arr1); // [1, 2, 3, 4, 5]
// console.log(arr2); // [1, 2, 3, 4, 5]
// console.log(arr3); // [1, 2, 3, 4, 5]
// console.log(arr4); // [1, 2, 3, 4, 5]
// console.log(arr5); // ['h', 'e', 'l', 'l', 'o']     
// console.log(arr6); // [1, 2, 3, 4, 5]


const arr7 = [1, 2, 3, 4, 5];
arr7.push(6); // adds 6 to the end of the array
arr7.unshift(0); // adds 0 to the beginning of the array
// console.log(arr7);
arr7.pop(); // removes the last element (6)
arr7.shift(); // removes the first element (0)
// console.log(arr7); 


// console.log(arr7.includes(3)); // true
// console.log(arr7.indexOf(3)); // 2
// console.log(arr7.lastIndexOf(3)); // 2
// console.log(arr7.join('-')); // 1-2-3-4-5
// console.log(arr7);
// console.log(arr7.reverse()); // [5, 4, 3, 2, 1]
// console.log(arr7);
// console.log(arr7.slice(1, 4)); // [2, 3, 4]
// console.log(arr7);
// console.log(arr7.splice(1, 2, 6, 7)); // [2, 3] (removes 2 elements starting from index 1 and adds 6 and 7)
// console.log(arr7); // [1, 6, 7, 4, 5]


// const arr8 = [1, 2, 3, 4, 5];
// const newArr = arr8.map((num) => num * 2);
// console.log("newArr:", newArr); // [2, 4, 6, 8, 10] 
// console.log("arr8:", arr8.join()); //string bn gya
// console.log("arr8:", arr8);













/*
An Array is an object used to store multiple values in a single variable.
=> Arrays are dynamic (size can change).
=> They can store different data types.
=> Indexing starts from 0.
=> JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any 
     javaScript objects create shallow copies, rather than deep copies).


Syntax => array.splice(start, deleteCount, item1, item2, ...)
Parameters
            start → Index where the operation starts.
            deleteCount → Number of elements to remove.
            item1, item2... → New elements to insert (optional).


=>slice() = "Copy" (original array stays the same).
=>splice() = "Cut/Paste" (original array changes).        



*/