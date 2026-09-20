### Prototype


let myName = "hitesh     "

console.log(myName.trueLength);

Output hoga:

undefined
Why? 🤔

trueLength JavaScript ka built-in property/method nahi hai.

String ke paas built-in methods hote hain jaise:

myName.length
myName.trim()
myName.toUpperCase()

Lekin:

myName.trueLength

JavaScript ko trueLength naam ki koi property nahi milti, isliye:

undefined
Agar hum khud trueLength banana chahein:
String.prototype.trueLength = function() {
    return this.trim().length;
}

let myName = "hitesh     "

console.log(myName.trueLength());

Output:

6