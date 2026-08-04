console.log(2> 1)
console.log(2< 1)
console.log(2>= 1)
console.log(2<= 1)
console.log(2== 1)
console.log(2!= 1)
console.log(2=== 1)
console.log(2!== 1) 

console.log(10 > "5")   
console.log(10 < "5")

console.log("10" > "5")
console.log(10 < "5")
console.log("apple" > "banana")



console.log(5 == "5");      // true
console.log(5 === "5");     // false

console.log(true == 1);     // true
console.log(true === 1);    // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log("10" > 2);      // true
console.log("10" < "2");    // true (string comparison)






// 1. Equality Comparison

            // Loose Equality (==)
// Compares values after converting them to the same type.
// Expression => Result	=> Reason
// 5 == "5"	=> true =>	String converted to number
// true == 1	=> true =>	true becomes 1
// false == 0	=> true =>	false becomes 0
// null == undefined	=> true =>	Special rule
// "" == 0	=> true =>	Empty string becomes 0


            // Strict Equality (===)
// Compares both value and data type.
// No type conversion.
// Expression => Result
// 5 === "5"	=> false
// 5 === 5	=> true
// true === 1	=> false
// null === undefined	=> false


        // 2. Relational Comparison (>, <, >=, <=)
// JavaScript converts operands to numbers unless both are strings.
// Expression => Result => Reason
// 10 > "5"	 => true => 	"5" → 5
// "20" < 100	=> true =>	"20" → 20
// "apple" < "banana"	=> true =>	Alphabetical comparison
// "10" < "2"	=> true =>	String comparison ("1" < "2")
// 10 < "2"	=> false =>	Numeric comparison (10 < 2)


            // 3. Different Data Type Comparisons
// Data Type 1	     Data Type 2	              ==	               ===
// Number	         String	                Converts types	       No conversion
// Number	         Boolean	           Boolean → Number	       Different types
// String	         Boolean	            Both converted	       Different types
// null	             undefined	            true	               false
// Object	          Primitive	            Object converted     Usually false
                                            // to primitive	

