# JavaScript `call()` Method

## 1. What is `call()`?

`call()` ka use function ko **immediately execute** karne ke liye hota hai aur hum decide kar sakte hain ki function ke andar `this` kis object ko refer karega.

### Syntax

```js
functionName.call(object, argument1, argument2);
```

Simple meaning:

> Function ko call karo, aur `this` ko diye gaye object par set karo.

---

## 2. Simple Example

```js
const user1 = {
    name: "Neha"
};

const user2 = {
    name: "Rahul"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

greet.call(user1);
greet.call(user2);
```

Output:

```text
Hello Neha
Hello Rahul
```

`greet.call(user1)` mein:

```text
greet()
  ↓
this = user1
  ↓
this.name = "Neha"
```

---

## 3. `call()` With Arguments

```js
function greet(age, city) {
    console.log(`Hello ${this.name}, age ${age}, city ${city}`);
}

const user = {
    name: "Neha"
};

greet.call(user, 22, "Delhi");
```

Output:

```text
Hello Neha, age 22, city Delhi
```

Breakdown:

```text
user       → this
22         → first argument
"Delhi"    → second argument
```

---

## 4. Important `this` Example

```js
function setUsername(username) {
    this.username = username;
}

const user = {
    name: "Neha"
};

setUsername.call(user, "Hitesh");

console.log(user);
```

Output:

```js
{
    name: "Neha",
    username: "Hitesh"
}
```

`setUsername.call(user, "Hitesh")` means:

```text
setUsername ko call karo
        +
this = user
        +
username = "Hitesh"
```

Inside:

```js
this.username = username;
```

effectively:

```js
user.username = "Hitesh";
```

---

## 5. `call()` With Constructor Pattern

```js
function setUsername(username) {
    this.username = username;
}

function createUser(username, email) {
    setUsername.call(this, username);
    this.email = email;
}

const user = new createUser("Neha", "neha@gmail.com");

console.log(user);
```

Output conceptually:

```js
{
    username: "Neha",
    email: "neha@gmail.com"
}
```

### Flow

```text
new createUser(...)
        ↓
new object created
        ↓
this → new object
        ↓
setUsername.call(this, username)
        ↓
setUsername ka this → same new object
        ↓
this.username = "Neha"
        ↓
this.email = "neha@gmail.com"
```

---

## 6. Normal Call vs `call()`

### Normal call

```js
greet();
```

`this` ka value calling context par depend karta hai.

### `call()`

```js
greet.call(user);
```

Hum explicitly specify kar rahe hain:

```text
this = user
```

---

## 7. `call()` vs Prototype

Dono alag concepts hain.

### Prototype

```text
object
   ↓
prototype
   ↓
next prototype
```

Prototype inheritance/property lookup ke liye hota hai.

### `call()`

```text
function
   ↓
call()
   ↓
this ko specified object bana do
```

`call()` function ko execute karta hai.

---

## 8. Quick Revision

```js
greet.call(user);
```

Means:

```text
greet function ko immediately execute karo
+
this = user
```

And:

```js
greet.call(user, 22, "Delhi");
```

Means:

```text
this = user
age = 22
city = "Delhi"
```

## Key Point

> **`call()` kisi function ko immediately execute karta hai aur us function ke `this` ko tumhare diye hue object se set karta hai.**
