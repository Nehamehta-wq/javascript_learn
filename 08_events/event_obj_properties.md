# JavaScript Event Object Properties

## 1. `event.type`

Ye batata hai ki **kaunsa event hua hai**.

### Example:

```javascript
document.getElementById("owl").addEventListener("click", function(event) {
    console.log(event.type);
});
```

User image/button par click karega:

```text
click
```

Agar `keydown` event hai:

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.type);
});
```

Output:

```text
keydown
```

### 🧠 Yaad rakho:

```text
event.type
    ↓
Kaunsa event hua?
```

Examples:

```text
click
keydown
keyup
submit
mouseover
```

---

# 2. `event.timeStamp`

Ye batata hai ki **event kab trigger hua tha**.

### Example:

```javascript
document.getElementById("owl").addEventListener("click", function(event) {
    console.log(event.timeStamp);
});
```

Output kuch aisa ho sakta hai:

```text
15432.52
```

⚠️ Important:

`event.timeStamp` generally event ke timing ko **milliseconds mein represent** karta hai. Ye `new Date()` jaisa actual date/time nahi hota.

### Difference:

```javascript
new Date()
```

→ Actual date + time

```javascript
event.timeStamp
```

→ Event timing ka numeric value

### 🧠 Yaad rakho:

```text
event.timeStamp
       ↓
Event ka timing
       ↓
Milliseconds mein
```

---

# 3. `event.defaultPrevented`

Ye batata hai ki **event ka default browser behavior prevent kiya gaya hai ya nahi**.

Iski value:

```text
true
false
```

### Example:

```javascript
form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log(event.defaultPrevented);

});
```

Output:

```text
true
```

Kyunki humne:

```javascript
event.preventDefault();
```

kiya hai.

---

## Agar `preventDefault()` nahi kiya:

```javascript
form.addEventListener("submit", function(event) {

    console.log(event.defaultPrevented);

});
```

Output:

```text
false
```

---

# ⭐ Teeno ek saath

```javascript
document.getElementById("owl").addEventListener("click", function(event) {

    console.log(event.type);
    console.log(event.timeStamp);
    console.log(event.defaultPrevented);

});
```

Output roughly:

```text
click
15432.52
false
```

---

# 🧠 One-Line Revision

| Property | Kya batati hai? |
|---|---|
| `event.type` | **Kaunsa event hua?** |
| `event.timeStamp` | **Event ka timing kya tha?** |
| `event.defaultPrevented` | **Default action prevent hua ya nahi?** |

### Easy trick:

```text
type
 ↓
WHAT happened?

timeStamp
 ↓
WHEN did the event happen?

defaultPrevented
 ↓
Was the browser's default action prevented?
```

---

