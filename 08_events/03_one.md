# setInterval() and clearInterval() Example

## Code

```html
<body> 
    <h1>Chai aur Javascript</h1> 
    <button id="start">Start</button> 
    <button id="stop">Stop</button> 
</body> 

<script> 
    const sayDate = function(str){ 
        console.log(str, Date.now()); 
    } 

    const intervalId = setInterval(sayDate, 1000, "hi") 

    clearInterval(intervalId) 
</script>
```

---

## 1. HTML part

```html
<h1>Chai aur Javascript</h1> 
<button id="start">Start</button> 
<button id="stop">Stop</button>
```

Page par:

```text
Chai aur Javascript

[Start]   [Stop]
```

`start` aur `stop` buttons banaye gaye hain.

**Lekin is code mein buttons ka JavaScript ke saath koi connection nahi hai.**

Abhi humne `addEventListener()` laga kar buttons ko use nahi kiya hai.

---

## 2. `sayDate` function

```javascript
const sayDate = function(str){ 
    console.log(str, Date.now()); 
}
```

Ye ek function hai jo `str` aur current time print karega.

Example:

```text
hi 1723456789000
```

### `Date.now()`

`Date.now()` current time ko **milliseconds** mein return karta hai.

Har baar function chalega, value generally change hogi.

---

## 3. `setInterval()`

```javascript
const intervalId = setInterval(sayDate, 1000, "hi")
```

Iska matlab:

> `sayDate` function ko **har 1000 milliseconds (1 second)** mein repeatedly execute karo.

Yahan 3 important parts hain:

```javascript
setInterval(sayDate, 1000, "hi")
```

### `sayDate`

Ye callback function hai.

### `1000`

1000 milliseconds = **1 second**

Isliye function har 1 second mein chalega.

### `"hi"`

Ye argument hai jo `sayDate(str)` ke `str` parameter mein jayega.

So browser internally roughly:

```javascript
sayDate("hi")
```

call karta rahega.

Output normally:

```text
hi 1723456789000
hi 1723456790000
hi 1723456791000
hi 1723456792000
...
```

---

## 4. `intervalId`

```javascript
const intervalId = setInterval(...)
```

`setInterval()` ek **interval ID** return karta hai.

Hum us ID ko `intervalId` variable mein store kar rahe hain.

```text
intervalId
    ↓
interval ki ID
```

Isi ID ko use karke interval ko stop kar sakte hain.

---

## 5. `clearInterval()`

```javascript
clearInterval(intervalId)
```

Iska matlab:

> Jo interval `intervalId` mein stored hai, usko stop/cancel kar do.

Flow:

```text
setInterval()
     ↓
Interval starts
     ↓
Every 1 second
     ↓
sayDate("hi")
     ↓
sayDate("hi")
     ↓
sayDate("hi")
     ↓
clearInterval(intervalId)
     ↓
STOP ❌
```

---

# ⚠️ Is particular code mein kya hoga?

Yahan sabse important point hai:

```javascript
const intervalId = setInterval(sayDate, 1000, "hi")

clearInterval(intervalId)
```

`setInterval()` ke **immediately baad** `clearInterval()` call ho raha hai.

Isliye interval ko baar-baar chalne ka chance hi nahi milega.

### Result:

```text
No "hi" output
```

Kyuki interval immediately stop ho gaya.

---

# Agar `clearInterval()` hata dein

```javascript
const intervalId = setInterval(sayDate, 1000, "hi")
```

Ab output har 1 second mein aayega:

```text
hi 1723456789000
hi 1723456790000
hi 1723456791000
hi 1723456792000
...
```

---

# Start aur Stop button ko actually use kaise karenge?

Agar hum chahte hain ki **Start button se interval start ho** aur **Stop button se interval stop ho**, to code kuch aisa hoga:

```javascript
const sayDate = function(str){ 
    console.log(str, Date.now()); 
}

let intervalId;

document.querySelector("#start").addEventListener("click", function(){
    intervalId = setInterval(sayDate, 1000, "hi");
});

document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(intervalId);
});
```

### Flow

```text
User clicks Start
       ↓
setInterval()
       ↓
Every 1 second
       ↓
sayDate("hi")
       ↓
sayDate("hi")
       ↓
sayDate("hi")
       ↓
User clicks Stop
       ↓
clearInterval(intervalId)
       ↓
Interval STOP ❌
```

---

# `setTimeout()` vs `setInterval()`

| Function | Meaning |
|---|---|
| `setTimeout()` | Ek baar future mein execute |
| `clearTimeout()` | Timeout ko cancel |
| `setInterval()` | Repeatedly execute |
| `clearInterval()` | Repeating interval ko stop |

### Easy Trick 🧠

```text
TIMEOUT
↓
Ek baar
↓
clearTimeout()
```

```text
INTERVAL
↓
Baar-baar
↓
clearInterval()
```

---

# One-Line Summary

> `setInterval()` kisi function ko repeatedly fixed interval par chalata hai, aur `clearInterval(intervalId)` us repeating process ko stop karta hai.

**Is code mein `clearInterval(intervalId)` immediately call hone ki wajah se interval turant cancel ho jata hai.**
