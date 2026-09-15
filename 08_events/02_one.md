# clearTimeout() and clearInterval()

## 1. clearTimeout()

`setTimeout()` callback ko sirf ek baar future mein execute karta hai.

Agar callback ko execute hone se pehle cancel karna ho, to `clearTimeout()` use karte hain.

### Example

```javascript
const timerId = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(timerId);
```

Yahan `timerId` mein timer ki ID store hoti hai aur `clearTimeout(timerId)` timer ko cancel kar deta hai.

### Flow

```text
setTimeout()
    ↓
Timer ID
    ↓
clearTimeout(timerId)
    ↓
Timer CANCEL ❌
```

### Real-life analogy

Tumne alarm lagaya:

> "3 seconds baad mujhe call karna."

Phir tum bolti ho:

> "Nahi, cancel kar do."

➡️ `clearTimeout()`.

---

## 2. clearInterval()

`setInterval()` callback ko baar-baar execute karta hai.

Us interval ko stop karne ke liye `clearInterval()` use karte hain.

### Example

```javascript
const intervalId = setInterval(() => {
    console.log("Hello");
}, 2000);

clearInterval(intervalId);
```

`clearInterval(intervalId)` repeating interval ko stop kar deta hai.

### Flow

```text
setInterval()
     ↓
Every 2 seconds
     ↓
Hello
     ↓
Hello
     ↓
Hello
     ↓
clearInterval(intervalId)
     ↓
STOP ❌
```

---

## Difference

| Function | Kaam |
|---|---|
| `setTimeout()` | Ek baar baad mein execute |
| `clearTimeout()` | `setTimeout()` ko cancel |
| `setInterval()` | Baar-baar execute |
| `clearInterval()` | `setInterval()` ko stop |

### Easy Trick 🧠

**Timeout → ek baar**

```javascript
setTimeout()
clearTimeout()
```

**Interval → repeatedly**

```javascript
setInterval()
clearInterval()
```

---

## Complete Example

### clearTimeout()

```javascript
const timeoutId = setTimeout(() => {
    console.log("Timeout");
}, 3000);

clearTimeout(timeoutId);
```

Yahan timer cancel ho gaya, isliye `"Timeout"` print nahi hoga.

### clearInterval()

```javascript
const intervalId = setInterval(() => {
    console.log("Interval");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
```

Yahan `setInterval()` har 1 second mein `"Interval"` print karega aur 5 seconds ke baad `clearInterval()` usko stop kar dega.

---

## One-Line Summary

> `clearTimeout()` = timeout ko cancel karo.

> `clearInterval()` = repeating interval ko stop karo.

---

