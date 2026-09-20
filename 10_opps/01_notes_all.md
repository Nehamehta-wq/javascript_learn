# JavaScript Prototype – `trueLength`

## Basic Code

```js
let myName = "hitesh     "

console.log(myName.trueLength);
```

### Output

```text
undefined
```

## Why `undefined`?

`trueLength` JavaScript ka built-in property ya method nahi hai.

String ke built-in examples:

```js
myName.length
myName.trim()
myName.toUpperCase()
```

Lekin:

```js
myName.trueLength
```

JavaScript ko `trueLength` naam ki property nahi milti, isliye output `undefined` hota hai.

---

## Apna `trueLength()` Method Banana

Hum `String.prototype` ke andar apna custom method add kar sakte hain:

```js
String.prototype.trueLength = function() {
    return this.trim().length;
}

let myName = "hitesh     "

console.log(myName.trueLength());
```

### Output

```text
6
```

---

## `String.prototype` Kya Hai?

JavaScript mein strings ka ek prototype hota hai:

```js
String.prototype
```

Hum is prototype mein custom methods add kar sakte hain.

Example:

```js
String.prototype.trueLength = function() {
    return this.trim().length;
}
```

Ab strings `trueLength()` method ko access kar sakti hain.

---

## `this` Kya Hai?

Jab hum likhte hain:

```js
myName.trueLength();
```

toh `trueLength()` ke andar:

```js
this
```

`myName` ko refer karega.

Isliye:

```js
this.trim().length
```

effectively `myName` par kaam karega.

Flow:

```text
myName
   ↓
"hitesh     "
   ↓
this.trim()
   ↓
"hitesh"
   ↓
.length
   ↓
6
```

---

## `trim()` Kya Karta Hai?

`trim()` string ke starting aur ending ke extra spaces remove karta hai.

```js
let myName = "hitesh     ";

console.log(myName.trim());
```

Output:

```text
hitesh
```

Aur:

```js
console.log(myName.trim().length);
```

Output:

```text
6
```

---

## Property vs Method

### Property

```js
myName.trueLength
```

Yahan property ki value access ho rahi hai.

### Method

```js
myName.trueLength()
```

Yahan function/method execute ho raha hai.

Isliye custom method ko execute karne ke liye `()` lagana zaroori hai.

---

## Complete Example

```js
String.prototype.trueLength = function() {
    return this.trim().length;
}

let myName = "hitesh     ";

console.log(myName.trueLength());
```

Output:

```text
6
```

---

## Important Point

> JavaScript prototype-based language hai. `String.prototype` ke through hum String objects ke liye custom methods add kar sakte hain.

Bina define kiye:

```js
myName.trueLength
```

ka result:

```text
undefined
```

hoga.
