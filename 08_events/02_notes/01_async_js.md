# Async JavaScript — Hinglish Notes

## 1. Async JavaScript kya hai?

JavaScript normally **synchronous** hoti hai, matlab code generally line-by-line execute hota hai.

Lekin kuch kaam time lete hain, jaise:

- API se data lana
- Database se data lana
- Timer
- File read karna
- Network request

Agar JavaScript har kaam ke complete hone ka wait kare, toh application slow/blocking feel ho sakti hai.

**Asynchronous JavaScript** ka idea:

> Time-consuming kaam start karo aur JavaScript ko baaki kaam continue karne do. Jab kaam complete ho jaye, tab uska result handle karo.

---

## 2. Synchronous vs Asynchronous

### Synchronous

```javascript
console.log("One");
console.log("Two");
console.log("Three");
```

Output:

```text
One
Two
Three
```

Flow:

```text
One
 ↓
Two
 ↓
Three
```

Har line previous line ke baad execute hoti hai.

### Asynchronous

```javascript
console.log("One");

setTimeout(function() {
    console.log("Two");
}, 2000);

console.log("Three");
```

Output:

```text
One
Three
Two
```

`setTimeout()` 2 seconds ke baad callback ko schedule karta hai, lekin JavaScript uske complete hone ka wait nahi karti.

Flow:

```text
One
 ↓
setTimeout start
 ↓
Three
 ↓
2 seconds complete
 ↓
Two
```

---

## 3. Blocking vs Non-Blocking

### Blocking

Ek kaam ke complete hone tak next kaam execute na ho:

```text
Task A
  ↓
wait...
  ↓
Task A complete
  ↓
Task B
```

### Non-Blocking

```text
Task A start
  ↓
Task B execute
  ↓
Task A complete hone par callback
```

Async JavaScript mostly isi non-blocking approach ko use karti hai.

---

## 4. `setTimeout()`

`setTimeout()` asynchronous behavior samajhne ka easiest example hai.

```javascript
setTimeout(function() {
    console.log("Hello");
}, 2000);
```

Meaning:

> Callback function ko approximately 2000 milliseconds (2 seconds) ke baad execute karne ke liye schedule karo.

Example:

```javascript
console.log("Start");

setTimeout(function() {
    console.log("Hello");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Hello
```

---

## 5. Callback kya hota hai?

**Callback = ek function jo kisi doosre function ko argument ke roop mein pass kiya jata hai.**

Example:

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Neha", function() {
    console.log("Welcome!");
});
```

Yahan:

```javascript
function() {
    console.log("Welcome!");
}
```

callback hai.

Async operations mein callback commonly operation complete hone ke baad execute hota hai.

---

## 6. Callback ke through Async JavaScript

```javascript
setTimeout(function() {
    console.log("Data received");
}, 2000);
```

Yahan callback hai:

```javascript
function() {
    console.log("Data received");
}
```

`setTimeout()` ka kaam hai callback ko given delay ke baad schedule karna.

---

## 7. Callback Hell

Multiple asynchronous operations ko nested callbacks mein likhne se code difficult ho sakta hai.

```javascript
getUser(function(user) {

    getOrders(user, function(orders) {

        getPayment(orders, function(payment) {

            getAddress(payment, function(address) {

                console.log(address);

            });

        });

    });

});
```

Is pyramid-like structure ko commonly **Callback Hell** kehte hain.

Problems:

- Code difficult to read
- Debugging difficult
- Error handling difficult
- Maintain karna difficult

Is problem ko reduce karne ke liye **Promises** aur **async/await** use kiye jaate hain.

---

# 8. Promise kya hai?

Promise ek object hai jo represent karta hai ki asynchronous operation ka result **future mein** milega.

Simple words:

> "Abhi result nahi hai, lekin future mein result milega."

Promise ki 3 states hoti hain:

```text
Pending
  ↓
Fulfilled
```

ya:

```text
Pending
  ↓
Rejected
```

### Pending

Operation abhi complete nahi hua.

### Fulfilled

Operation successfully complete ho gaya.

### Rejected

Operation fail ho gaya.

---

## 9. Promise banana

```javascript
const promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Task successful");
    } else {
        reject("Task failed");
    }

});
```

Yahan:

- `resolve()` → success
- `reject()` → failure

---

## 10. Promise ko consume karna

```javascript
promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
```

### `.then()`

Promise successfully fulfill hone par result handle karta hai.

### `.catch()`

Promise reject hone par error handle karta hai.

---

## 11. Promise Example

```javascript
const promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve("Data received");
    }, 2000);

});

promise
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
```

Flow:

```text
Promise created
      ↓
Pending
      ↓
2 seconds
      ↓
resolve()
      ↓
.then()
      ↓
"Data received"
```

---

# 12. `async` keyword

`async` function ko asynchronous function declare karne ke liye use hota hai.

Syntax:

```javascript
async function test() {
    // code
}
```

Example:

```javascript
async function greet() {
    return "Hello";
}
```

### Important

`async` function **hamesha Promise return karti hai**.

```javascript
async function greet() {
    return "Hello";
}

console.log(greet());
```

Ye directly `"Hello"` nahi deta; `greet()` ek Promise return karta hai.

Result ko:

```javascript
greet().then(function(message) {
    console.log(message);
});
```

se handle kar sakte hain.

---

# 13. `await` keyword

`await` ka use Promise ke result ka wait karne ke liye hota hai.

Example:

```javascript
async function getData() {

    const result = await promise;

    console.log(result);

}
```

Simple meaning:

> Is async function ke andar, Promise settle hone tak next statement ko continue mat karo.

Normally `await` **async function ke andar** use hota hai.

---

# 14. `async` + `await`

Example:

```javascript
function getData() {
    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("Data received");
        }, 2000);

    });
}

async function showData() {

    console.log("Start");

    const data = await getData();

    console.log(data);

    console.log("End");
}

showData();
```

Output:

```text
Start
Data received
End
```

Yahan `await` ki wajah se `showData()` ke andar next line Promise settle hone ke baad continue hoti hai.

---

# 15. `async/await` ka advantage

Promise chaining:

```javascript
getData()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
```

Async/await:

```javascript
async function showData() {

    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}
```

`async/await` asynchronous code ko **synchronous-looking aur easier-to-read** bana deta hai.

---

# 16. Error Handling with `try...catch`

`await` ke saath errors handle karne ke liye commonly:

```javascript
async function showData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

Agar Promise reject ho gaya:

```text
Promise
   ↓
reject()
   ↓
catch block
```

---

# 17. Real API Example

API se data fetch karne ke liye:

```javascript
async function getUsers() {

    try {

        const response = await fetch("https://example.com/users");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

Flow:

```text
fetch()
  ↓
Promise
  ↓
await
  ↓
response
  ↓
response.json()
  ↓
await
  ↓
data
```

### Important

`fetch()` ek Promise return karta hai.

Aur:

```javascript
response.json()
```

bhi Promise return karta hai.

Isliye dono ke saath `await` use kiya ja sakta hai.

---

# 18. `await` JavaScript ko completely block karta hai?

**Nahi.**

Ye bahut important point hai.

```javascript
async function test() {

    const data = await getData();

    console.log(data);

}
```

`await` current async function ke execution ko us point par pause karta hai, lekin **poori JavaScript/browser ko freeze nahi karta**.

Browser meanwhile doosre tasks handle kar sakta hai.

---

# 19. Multiple Promises

Agar independent Promises hain aur humein dono ke results chahiye:

```javascript
const p1 = getData1();
const p2 = getData2();

const result1 = await p1;
const result2 = await p2;
```

Better parallel approach:

```javascript
const [result1, result2] = await Promise.all([
    getData1(),
    getData2()
]);
```

`Promise.all()` multiple independent Promises ko efficiently together wait karne mein useful hai.

---

# 20. `Promise.all()`

Example:

```javascript
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");

Promise.all([p1, p2])
    .then(function(results) {
        console.log(results);
    });
```

Output:

```text
["One", "Two"]
```

Agar provided Promises mein se koi reject ho jaye, `Promise.all()` ka combined Promise reject ho jata hai.

---

# 21. Event Loop — Basic Idea

JavaScript ka execution model single-threaded hai, lekin browser/Node.js environment asynchronous operations provide karta hai.

Basic concepts:

```text
Call Stack
Web APIs / Runtime APIs
Task Queue
Event Loop
```

Example:

```javascript
console.log("A");

setTimeout(function() {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

Even `0` milliseconds hone par callback immediately current synchronous code ke beech mein execute nahi hota.

Basic flow:

```text
console.log("A")
      ↓
Call Stack
      ↓
"A"

setTimeout()
      ↓
Timer handled by runtime
      ↓
Callback queue mein jaata hai

console.log("C")
      ↓
"C"

Call Stack empty
      ↓
Callback execute
      ↓
"B"
```

---

# 22. Callback vs Promise vs Async/Await

### Callback

```javascript
setTimeout(function() {
    console.log("Hello");
}, 1000);
```

### Promise

```javascript
getData()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
```

### Async/Await

```javascript
async function test() {
    const data = await getData();
    console.log(data);
}
```

Ye asynchronous operations handle karne ke different patterns hain.

---

# 23. Async JavaScript ka Overall Flow

```text
Synchronous Code
      ↓
Async operation start
      ↓
Promise / callback
      ↓
JavaScript doosra kaam kar sakti hai
      ↓
Async operation complete
      ↓
Callback / .then() / await continuation
      ↓
Result handle
```

---

# 24. Quick Revision 🧠

| Concept | Meaning |
|---|---|
| `setTimeout()` | Future mein callback schedule karta hai |
| Callback | Function passed to another function |
| Promise | Future result represent karta hai |
| `resolve()` | Promise success |
| `reject()` | Promise failure |
| `.then()` | Successful result handle |
| `.catch()` | Error/rejection handle |
| `async` | Function ko Promise-returning banata hai |
| `await` | Promise settle hone tak current async function ko pause karta hai |
| `try...catch` | Errors handle karta hai |
| `Promise.all()` | Multiple Promises ko together wait karta hai |
| Event Loop | Queued async work ko execution ke liye coordinate karta hai |

---

# 25. Interview Important Points 🎯

### Q1. JavaScript synchronous hai ya asynchronous?

JavaScript ka core execution model **single-threaded aur synchronous by default** hai, lekin browser/Node.js runtime asynchronous operations provide karta hai.

### Q2. `async` function kya return karti hai?

`async` function **Promise return karti hai**.

### Q3. `await` kya karta hai?

`await` async function ke andar Promise ke settle hone tak us function ki execution ko pause karta hai.

### Q4. Kya `await` poori JavaScript ko block karta hai?

**Nahi.** Sirf current async function ka execution us point par pause hota hai.

### Q5. Promise ki states kya hain?

```text
Pending
Fulfilled
Rejected
```

### Q6. `.then()` aur `.catch()`?

```text
.then()  → successful result
.catch() → rejection/error
```

### Q7. Callback Hell ko kaise reduce karte hain?

Promises aur `async/await` se.

---

# One-Line Summary

```text
Async JavaScript = time-consuming operations ko aise handle karna
jisse current execution unnecessarily block na ho aur result
complete hone par callback, Promise, ya async/await se handle kiya ja sake.
```
