# Async JavaScript Event Loop — Hinglish

## Overall Flow

```text
JavaScript
   ↓
Call Stack
   ↓
Web API ko async kaam
   ↓
Queue
   ↓
Event Loop
   ↓
Call Stack
```

## 1. JS Engine 🟨

JS Engine ke important parts:

```text
Memory Heap
Call Stack
```

### Call Stack

JavaScript ka normal code yahin execute hota hai.

```javascript
console.log("Hello");
```

Function execute hote waqt Call Stack mein aata hai aur complete hone ke baad remove ho jata hai.

---

## 2. Web API 🟩

Browser/runtime kuch APIs provide karta hai:

```text
Web APIs
   ├── setTimeout()
   ├── setInterval()
   ├── fetch()
   └── DOM APIs
```

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

JavaScript 2 seconds tak Call Stack mein wait nahi karti. Timer ka kaam Web API/runtime handle karta hai.

```text
Call Stack
    |
    | setTimeout
    ↓
Web API
```

---

## 3. `setTimeout()` ka Flow

```text
JavaScript
    ↓
setTimeout()
    ↓
Web API
    ↓
2 second timer
    ↓
Callback ready
    ↓
Task Queue
```

Callback directly Call Stack mein immediately nahi aata.

---

## 4. Task Queue 📦

Task Queue mein callbacks wait kar sakte hain.

```text
Task Queue

[ CB ] [ CB ]
```

`CB` = Callback.

Example callback:

```javascript
() => {
    console.log("Hello");
}
```

---

## 5. Event Loop 🔄

Event Loop continuously check karta hai:

> "Kya Call Stack empty hai?"

Agar Call Stack empty hai aur queue mein callback hai:

```text
Task Queue
    ↓
Event Loop
    ↓
Call Stack
```

Phir callback execute hota hai.

---

## 6. Complete `setTimeout()` Example

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Output:

```text
A
C
B
```

Flow:

```text
console.log("A")
      ↓
Call Stack
      ↓
A

setTimeout()
      ↓
Web API
      ↓
2 sec timer

console.log("C")
      ↓
C

Timer complete
      ↓
Task Queue
      ↓
Event Loop
      ↓
Call Stack
      ↓
B
```

---

## 7. `fetch()` wala Pink Part 🩷

`fetch()` API call karta hai aur **Promise return karta hai**.

```javascript
fetch("some-url")
    .then(() => {
        console.log("Data received");
    });
```

Basic flow:

```text
fetch()
   ↓
Web API / Runtime
   ↓
Network request
   ↓
Response
   ↓
Promise settle
   ↓
Microtask Queue
```

Diagram mein isko **High Priority** queue ke form mein dikhaya gaya hai.

---

## 8. Microtask Queue / High Priority Queue

Promise callbacks commonly Microtask Queue mein jaate hain:

```text
.then()
.catch()
.finally()
```

Example:

```javascript
Promise.resolve().then(() => {
    console.log("Hello");
});
```

---

## 9. Task Queue vs Microtask Queue 🔥

### `setTimeout`

```text
setTimeout()
    ↓
Task Queue
```

### Promise

```text
Promise.then()
      ↓
Microtask Queue
```

Simplified order:

```text
Synchronous code
       ↓
Microtasks
       ↓
Tasks
```

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Reason:

```text
A, D → synchronous
C    → microtask
B    → task
```

---

## 10. Complete Diagram Flow

```text
             JavaScript Engine
                   │
                   ↓
              Call Stack
                   │
                   │ async operation
                   ↓
                Web APIs
             /     |            setTimeout  fetch   DOM
             \     |      /
                   ↓
                Queues
             /                   Microtask         Task
        Queue            Queue
           │                │
           └──────┬─────────┘
                  ↓
              Event Loop
                  ↓
              Call Stack
```

---

## 11. Diagram ki Arrows

### White Arrow

```text
Call Stack → Web API
```

JavaScript async operation Web API/runtime ko de deta hai.

### Green Dashed Arrow

```text
Web API → Task Queue
```

Async operation complete hone ke baad callback Task Queue mein ja sakta hai.

### White Dashed Arrow

```text
Task Queue → Call Stack
```

Event Loop callback ko Call Stack mein bhejta hai jab Stack available ho.

### Pink Arrow

```text
fetch()
   ↓
Promise / Microtask
```

Promise-based operation ka continuation Microtask Queue mein schedule kiya ja sakta hai.

---

## 12. Real-Life Analogy 🍔

**Call Stack = Chef** 👨‍🍳

Chef ek time par main task execute karta hai.

Agar chef ko time-consuming kaam mile:

```text
Timer lagao
API call karo
Network request karo
```

toh woh kaam browser/runtime ko de deta hai.

```text
Chef / Call Stack
       ↓
Web API
```

Web API kaam complete karti hai:

```text
Web API
   ↓
Queue
```

Event Loop queue check karta rehta hai:

```text
Event Loop 👀
```

Jab Call Stack free hota hai:

```text
Queue
  ↓
Event Loop
  ↓
Call Stack
```

Aur callback execute ho jata hai.

---

## 13. Important Correction 🛑

Common misunderstanding:

❌ "JavaScript async hai."

Better:

> JavaScript ka core execution model **single-threaded aur synchronous by default** hai, lekin browser/runtime Web APIs aur Event Loop ke through asynchronous operations handle karne ki facility deta hai.

So:

```text
JavaScript
     +
Web APIs
     +
Queues
     +
Event Loop
     ↓
Asynchronous behavior
```

---

## 14. Async JavaScript Overall Flow

```text
Synchronous Code
      ↓
Async operation start
      ↓
Web API / Runtime
      ↓
Promise / Callback
      ↓
JavaScript doosra kaam kar sakti hai
      ↓
Async operation complete
      ↓
Microtask / Task Queue
      ↓
Event Loop
      ↓
Call Stack
      ↓
Callback / continuation execute
```

---

## 15. Callback vs Promise vs Async/Await

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

## 16. Quick Revision 🧠

| Concept | Meaning |
|---|---|
| Memory Heap | Objects/data memory mein store hote hain |
| Call Stack | JavaScript functions/code execute karta hai |
| Web APIs | Browser/runtime ki async facilities |
| `setTimeout()` | Timer ke baad callback schedule karta hai |
| Callback | Function passed to another function |
| Task Queue | Tasks/callbacks wait karte hain |
| Promise | Future result represent karta hai |
| `resolve()` | Promise success |
| `reject()` | Promise failure |
| `.then()` | Successful result handle |
| `.catch()` | Rejection/error handle |
| `async` | Function Promise return karti hai |
| `await` | Current async function ko Promise settle hone tak pause karta hai |
| Microtask Queue | Promise callbacks jaise microtasks handle karti hai |
| `Promise.all()` | Multiple Promises ko together wait karta hai |
| Event Loop | Queued work ko Call Stack tak coordinate karta hai |

---

## 17. Interview Points 🎯

### JavaScript synchronous hai ya asynchronous?

JavaScript ka core execution model **single-threaded aur synchronous by default** hai. Browser/Node.js runtime asynchronous operations provide karta hai.

### `async` function kya return karti hai?

`async` function **Promise return karti hai**.

### `await` kya karta hai?

`await` async function ke andar Promise settle hone tak current async function ki execution ko us point par pause karta hai.

### Kya `await` poori JavaScript ko block karta hai?

**Nahi.** Sirf current async function ka execution pause hota hai.

### Promise ki states?

```text
Pending
Fulfilled
Rejected
```

### `then()` aur `catch()`?

```text
.then()  → successful result
.catch() → rejection/error
```

### Callback Hell ko kaise reduce karte hain?

Promises aur `async/await` se.

### `setTimeout(..., 0)` immediately execute hota hai?

**Nahi.** Callback current synchronous code complete hone ke baad queue mein aata hai aur Event Loop ke through execute hota hai.

---

# Final Memory Trick 🔥

```text
Call Stack
    ↓
Web API
    ↓
Queue
    ↓
Event Loop
    ↓
Call Stack
```

> **Call Stack kaam karta hai → Web API async kaam sambhalti hai → Queue callback ko rakhti hai → Event Loop callback ko Call Stack mein bhejta hai.**
