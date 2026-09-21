# JavaScript Function as Object & Prototype

## Code

```js
function multipleBy5(num){
    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
```

## Output

```text
25
2
{}
```

---

## 1. `multipleBy5(5)`

```js
console.log(multipleBy5(5));
```

Function call hota hai.

```text
5 × 5 = 25
```

Output:

```text
25
```

---

## 2. Function bhi ek Object hai

JavaScript mein function sirf function hi nahi hota, woh **object ki tarah properties bhi rakh sakta hai**.

Isliye hum likh sakte hain:

```js
multipleBy5.power = 2
```

Ab function ke paas ek custom property hai:

```text
multipleBy5
   ├── function logic
   └── power = 2
```

Isliye:

```js
console.log(multipleBy5.power);
```

Output:

```text
2
```

---

## 3. `multipleBy5.prototype`

```js
console.log(multipleBy5.prototype);
```

Output generally:

```text
{}
```

Function ke saath ek `prototype` property available hoti hai.

```js
multipleBy5.prototype
```

Ye ek **prototype object** hota hai.

Iska important use `new` ke saath objects banate waqt hota hai.

---

## 4. Prototype ka Practical Example

```js
function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    console.log("Hello " + this.name);
}

const user1 = new User("Neha");

user1.greet();
```

Output:

```text
Hello Neha
```

### Flow

```text
User function
      ↓
User.prototype
      ↓
greet() method
      ↓
new User("Neha")
      ↓
user1
      ↓
user1.greet()
```

`user1` ko `greet()` directly apne andar nahi milta, toh JavaScript prototype chain ke through `User.prototype` mein method search karta hai.

---

## 5. `power` vs `prototype`

### `multipleBy5.power`

```js
multipleBy5.power
```

Ye ek **normal custom property** hai.

Value:

```text
2
```

### `multipleBy5.prototype`

```js
multipleBy5.prototype
```

Ye function ka **prototype object** hai.

Ye mainly `new` se banne wale objects ke inheritance ke liye important hota hai.

---

## 6. Simple Diagram

```text
multipleBy5
    │
    ├── function logic
    │
    ├── power → 2
    │
    └── prototype → {}
                       │
                       └── methods/properties
                           for objects created using `new`
```

---

## 7. Important Concept

> **JavaScript mein function callable bhi hota hai aur object ki tarah properties bhi rakh sakta hai.**

Isliye:

```js
multipleBy5(5)
```

function ko call karta hai.

Aur:

```js
multipleBy5.power
```

function ki property access karta hai.

Aur:

```js
multipleBy5.prototype
```

function ka prototype object access karta hai.

---

## Quick Revision

```text
multipleBy5(5)
      ↓
Function call
      ↓
25
```

```text
multipleBy5.power
      ↓
Custom property
      ↓
2
```

```text
multipleBy5.prototype
      ↓
Prototype object
      ↓
Used with `new` for prototype-based inheritance
```
