# Promise in JavaScript — Hinglish Notes

## 1. Promise kya hai?

**Promise ek object hai jo batata hai ki koi asynchronous operation ka result future mein milega.**

Simple language:

> **Promise = "Abhi result nahi hai, lekin future mein result dunga."** 😄

Example:

```js
const promise = fetch("https://api.github.com/users/hiteshchoudhary");
```

API ka response turant nahi aata. Isliye `fetch()` ek **Promise** return karta hai.

---

# 2. Promise ki 3 States

```text
             Promise
                |
        ┌───────┼────────┐
        ↓       ↓        ↓
     Pending  Fulfilled  Rejected
```

### Pending ⏳

Operation abhi chal raha hai.

```text
API request bheji
      ↓
Response abhi nahi aaya
      ↓
Pending
```

### Fulfilled ✅

Operation successfully complete ho gaya.

```text
API request
    ↓
Response successfully aa gaya
    ↓
Fulfilled
```

### Rejected ❌

Operation fail ho gaya.

```text
API request
    ↓
Error
    ↓
Rejected
```

---

# 3. Real-Life Example

Maan lo tumne Amazon par order kiya:

```text
Order placed
     ↓
   Pending
     ↓
 ┌───────────────┐
 ↓               ↓
Delivered      Cancelled
   ↓               ↓
Fulfilled       Rejected
```

Promise bhi basically isi concept par kaam karta hai.

---

# 4. Promise banana

```js
const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("Async task completed");
        resolve();
    }, 1000);

});
```

`new Promise(...)` Promise create karta hai.

Promise ko do important functions milte hain:

```js
resolve
reject
```

---

# 5. `resolve()` kya karta hai?

```js
resolve();
```

Meaning:

> Operation successfully complete ho gaya. ✅

Example:

```js
const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("Task completed");
        resolve();
    }, 1000);

});
```

---

# 6. Promise ka result kaise handle karein?

Promise ke saath `.then()` use karte hain:

```js
promiseOne.then(function() {
    console.log("Promise consumed");
});
```

Flow:

```text
Promise created
      ↓
Task running
      ↓
resolve()
      ↓
.then()
      ↓
Success code
```

---

# 7. `reject()` kya karta hai?

```js
reject();
```

Meaning:

> Operation fail ho gaya. ❌

Example:

```js
const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {

        const error = true;

        if (!error) {
            resolve();
        } else {
            reject();
        }

    }, 1000);

});
```

Agar error hai toh Promise reject ho jayega.

---

# 8. `.catch()`

Rejected Promise ko handle karne ke liye:

```js
promiseOne
    .then(function() {
        console.log("Success");
    })
    .catch(function() {
        console.log("Something went wrong");
    });
```

So:

```text
resolve()
   ↓
.then()

reject()
   ↓
.catch()
```

---

# 9. `resolve(data)` mein data bhi bhej sakte ho

```js
const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve({
            username: "Hitesh",
            email: "hitesh@gmail.com"
        });

    }, 1000);

});
```

Ab:

```js
promiseOne.then(function(user) {
    console.log(user);
});
```

Output:

```js
{
    username: "Hitesh",
    email: "hitesh@gmail.com"
}
```

Matlab:

```text
resolve(data)
      ↓
.then(data)
```

---

# 10. Promise with API

Tum jo GitHub API kar rahe the, usme Promise already use ho raha hai.

```js
fetch("https://api.github.com/users/hiteshchoudhary")
```

`fetch()` **Promise return karta hai**.

```js
fetch("https://api.github.com/users/hiteshchoudhary")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
```

Flow:

```text
fetch()
   ↓
Promise
   ↓
API request
   ↓
Response
   ↓
.then(response)
   ↓
response.json()
   ↓
Promise
   ↓
.then(data)
   ↓
GitHub data
```

---

# 11. `async/await` bhi Promise ke saath

Modern JavaScript mein:

```js
async function getUser() {

    try {

        const response = await fetch(
            "https://api.github.com/users/hiteshchoudhary"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}
```

Yahan:

```js
await fetch(...)
```

ka matlab roughly:

> Promise settle hone tak is async function ke next step ko wait karvao.

---

# 12. `.then()` vs `async/await`

### `.then()`

```js
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

### `async/await`

```js
async function getData() {

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
```

Dono **Promises ke saath** kaam karte hain.

---

# 13. Important Promise Methods

```text
.then()    → success/result handle
.catch()   → error handle
.finally() → dono cases ke baad execute
```

### `.then()`

Promise successfully resolve hone par run hota hai.

```js
promise.then(data => {
    console.log(data);
});
```

### `.catch()`

Promise reject/error hone par run hota hai.

```js
promise.catch(error => {
    console.log(error);
});
```

### `.finally()`

Promise resolve ya reject hone ke baad run hota hai.

```js
promise.finally(() => {
    console.log("Operation completed");
});
```

---

# 14. Quick Revision 🧠

```text
Promise
   ↓
Future mein result milega
```

3 states:

```text
Pending    → abhi process chal raha hai
Fulfilled  → successfully complete
Rejected   → fail
```

Important methods:

```text
.then()    → success/result handle
.catch()   → error handle
.finally() → dono cases ke baad execute
```

And:

```text
fetch()
  ↓
Promise return karta hai
```

---

# 15. One-Line Definition

> **Promise JavaScript ka object hai jo asynchronous operation ke future result ko represent karta hai.**

---

# 16. Connection with API 🔥

```text
JavaScript
     ↓
fetch()
     ↓
Promise
     ↓
GitHub API
     ↓
Response
     ↓
response.json()
     ↓
Promise
     ↓
JSON Data
```

Isliye API aur Promise ka direct connection hai.

**`fetch()` asynchronous API request karta hai aur Promise return karta hai.**

---

# Final Mental Model 🚀

```text
              Promise
                 |
        ┌────────┼────────┐
        ↓        ↓        ↓
     Pending  Fulfilled  Rejected
        |        |        |
        |       .then()  .catch()
        |
        └───────────────┐
                        ↓
                    Result/Error
```

**Promise = Future result ka promise.**

**`resolve()` → success**

**`reject()` → failure**

**`.then()` → success handle**

**`.catch()` → error handle**

**`async/await` → Promise ko clean/readable way mein handle karna**
