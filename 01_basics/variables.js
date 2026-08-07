const accId=144
let accemail="mehta@123.com"
var accPss="12345"
accountcity="Cmpt"


// accId=2
console.log(accId)

accemail="nehaneha"
accPss="2222"
console.log(accemail)
console.log(accPss)
console.table([accId, accemail, accPss, accountcity])

const student = {
  name: "Neha",
  age: 21,
  course: "BCA"
};

console.log(student);

const students = [
  { name: "Neha", age: 21, course: "BCA" },
  { name: "Rahul", age: 22, course: "MCA" },
  { name: "Priya", age: 20, course: "B.Tech" }
];

console.table(students);


















// Feature	var	let	const
// Scope	        Function Scope	      Block Scope	             Block Scope
// Redeclare	     ✅ Yes	             ❌ No	                   ❌ No
// Reassign	        ✅ Yes	             ✅ Yes	                 ❌ No
// Preferred	     ❌ No	               ✅ Yes	               ✅ Yes