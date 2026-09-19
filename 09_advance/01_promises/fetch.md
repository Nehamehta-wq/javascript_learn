# Fetch API + Promise Chaining — Hinglish Notes

## Code

```js
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
```

## 1. `fetch()` kya hai?

`fetch()` JavaScript ka method hai jisse hum kisi API/server se data request karte hain.

```js
fetch('https://api.github.com/users/hiteshchoudhary')
```

Yahan GitHub API ko request bheji ja rahi hai.

### Important

`fetch()` **ek Promise return karta hai**.

```text
fetch()
   ↓
Promise
   ↓
server se response aayega
```

Isi wajah se hum `.then()` use kar sakte hain.

---

## 2. Pehla `.then()`

```js
.then((response) => {
    return response.json()
})
```

Jab `fetch()` successfully response receive karta hai, pehla `.then()` execute hota hai.

`response` ek **Response object** hai.

`response` naam fixed nahi hai. Ye bhi likh sakte ho:

```js
.then((res) => {
    return res.json()
})
```

---

## 3. `response.json()` kya karta hai?

```js
return response.json()
```

Ye response ki body ko usable JSON data mein parse karta hai.

Important: `response.json()` bhi **Promise return karta hai**.

```text
fetch()
   ↓
Response object
   ↓
response.json()
   ↓
Promise
   ↓
parsed JSON data
```

---

## 4. `return` kyun hai?

```js
return response.json()
```

Hum `response.json()` ka Promise **next `.then()` ko pass** kar rahe hain.

Isliye:

```js
.then((data) => {
    console.log(data);
})
```

mein `data` milta hai.

Flow:

```text
First .then()
      ↓
return response.json()
      ↓
Second .then()
      ↓
data
```

---

## 5. Second `.then()`

```js
.then((data) => {
    console.log(data);
})
```

Ab `data` mein parsed JSON object hota hai.

Example:

```js
{
    login: "hiteshchoudhary",
    id: 123456,
    followers: 1000,
    public_repos: 50
}
```

Actual values API ke current response par depend karte hain.

---

## 6. `.catch()`

```js
.catch((error) => console.log(error))
```

Agar Promise chain mein error/rejection hota hai, `.catch()` us error ko handle karta hai.

```text
Success → .then()
Error   → .catch()
```

---

# 7. Complete flow

```text
fetch(URL)
     ↓
Promise
     ↓
GitHub server ko request
     ↓
Response milta hai
     ↓
First .then(response)
     ↓
response.json()
     ↓
JSON parsing Promise
     ↓
return
     ↓
Second .then(data)
     ↓
console.log(data)
```

Error hua to:

```text
fetch()
  ↓
Rejected / error
  ↓
.catch(error)
```

---

# 8. Ye sabse pehle kyun run hua?

Agar JavaScript mein ye code hai:

```js
console.log("One");

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

console.log("Two");
```

Output approximately:

```text
One
Two
GitHub data
```

Kyunki `fetch()` **asynchronous** hai.

`fetch()` request start karta hai, lekin response aane tak JavaScript baaki synchronous code ko continue kar sakti hai.

---

# 9. Important distinction

`fetch()` **sabse pehle start** ho sakta hai, lekin uska **result sabse pehle print nahi hota**.

Example:

```js
console.log("A");

fetch(URL)
.then((response) => response.json())
.then((data) => console.log(data));

console.log("B");
```

Execution:

```text
1. "A" → immediately
2. fetch() → request start
3. "B" → immediately
4. server response → later
5. first .then() → later
6. response.json() → later
7. second .then(data) → later
```

Output:

```text
A
B
GitHub data
```

---

# 10. Fetch asynchronous kyun hai?

Network request mein multiple steps hote hain:

```text
Browser
   ↓
Internet
   ↓
GitHub Server
   ↓
Server processes request
   ↓
Response
   ↓
Browser
```

Ismein time lag sakta hai.

Isliye JavaScript request start karke baaki code ko block nahi karti.

---

# 11. Callback ka connection

Ye:

```js
.then((response) => {
    return response.json()
})
```

mein:

```js
(response) => {
    return response.json()
}
```

ek **callback function** hai.

`.then()` ko hum bol rahe hain:

> Promise resolve hone ke baad ye function chala dena.

---

# 12. Promise chaining

Ye:

```js
fetch(URL)
.then(...)
.then(...)
.catch(...)
```

**Promise chaining** hai.

Ek `.then()` ke andar `return` ki hui value next `.then()` tak ja sakti hai.

```text
fetch()
  ↓
.then(response)
  ↓
return response.json()
  ↓
.then(data)
  ↓
console.log(data)
```

---

# 13. Short version

Same code ko clean/short way mein:

```js
fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
```

---

# 14. Real-life analogy

Socho tum restaurant mein order dete ho:

```text
Tum
 ↓
Order place
 ↓
Wait
 ↓
Restaurant response
 ↓
Order details
 ↓
Tum receive karte ho
```

- `fetch()` = order place karna
- `Promise` = future result
- first `.then()` = response receive karna
- `response.json()` = response ko usable data mein convert karna
- second `.then()` = actual data use karna
- `.catch()` = problem/error handle karna

---

# 15. Most important points

1. `fetch()` → Promise return karta hai.
2. First `.then(response)` → Response object receive karta hai.
3. `response.json()` → response body ko JSON data mein parse karta hai.
4. `response.json()` → Promise return karta hai.
5. `return response.json()` → result ko next `.then()` tak bhejta hai.
6. Second `.then(data)` → parsed data receive karta hai.
7. `.catch(error)` → error handle karta hai.
8. `fetch()` asynchronous hai.
9. Fetch ke response ka wait karte waqt normal synchronous code continue ho sakta hai.
10. `.then()` ke andar diya function callback function hai.

## Final mental model

```text
fetch(URL)
   ↓
"Request bhejo"
   ↓
Promise
   ↓
"Response aane par..."
   ↓
.then(response)
   ↓
response.json()
   ↓
"JSON parse hone par..."
   ↓
.then(data)
   ↓
console.log(data)

Error anywhere
   ↓
.catch(error)
```
