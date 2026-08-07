const newobject = new Object(); // it is singleton object, so we can create only one instance of it, 
// but we can create multiple instances of object literals


const tinder={}; //non-singleton object, we can create multiple instances of it
tinder.id="tinder1";
tinder.name="abcd";
tinder.age=20;
//console.log(tinder); // { id: 'tinder1', name: 'abcd', age: 20 }



const regularUser = {
    email: "neha@gmail.com",

    fullname: {
        userfullname: {
            firstname: "Neha",
            lastname: "Mehta"
        }
    }
};

// console.log(
//     regularUser.fullname.userfullname.firstname +
//     " " +
//     regularUser.fullname.userfullname.lastname
// );

// console.log(
//     `${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname}`
// );




const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

const obj3 = {
    5: "e",
    6: "f"
};

// const mergedObject = Object.assign({}, obj1, obj2, obj3); // without {} it will merge the objects into the first object, so obj1 will be modified and obj2 and obj3 will remain same
// Object.assign(obj1, obj2, obj3); // with {} it will create a new object and merge the objects into it, 
                                    // so obj1, obj2 and obj3 will remain same
// console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(mergedObject); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// Why {}?
// Object.assign({}, obj1, obj2)
// {} → target object (empty object)
// obj1, obj2 → source objects
// This creates a new object.


const obj4 = {obj1, obj2, obj3}; // this will create a new object with keys as obj1, obj2 and obj3 
                                 // and values as the objects themselves
const obj5={...obj1, ...obj2, ...obj3}; // this will create a new object with keys as the keys of obj1, obj2 and obj3
// console.log(obj5);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


//console.log(Object.keys(tinder)); // [ 'id', 'name', 'age' ]
//console.log(Object.values(tinder)); // [ 'tinder1', 'abcd', 20 ]
//console.log(Object.entries(tinder)); // [ [ 'id', 'tinder1' ], [ 'name', 'abcd' ], [ 'age', 20 ] ]


//console.log(Object.keys(users)); // [ '0', '1', '2' ]
//console.log(Object.values(users)); // [ { id: 1, email: '
//console.log(Object.entries(users)); // [ [ '0', { id: 1, email: ' ]



console.log(tinder.hasOwnProperty("id")); // true