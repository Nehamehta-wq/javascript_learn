# JavaScript Event Object Properties

## 1. `event.target`

`event.target` batata hai:

> **Actually jis element par user ne event trigger kiya hai.**

### Example:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", function(event) {
    console.log(event.target);
});
```

Agar user **button** par click karega:

```text
event.target
      ↓
<button>
```

Yaani listener parent par laga hua hai, **lekin target button hai**, kyunki click button par hua tha.

---

# 2. `event.currentTarget`

`event.currentTarget` batata hai:

> **Jis element par event listener laga hua hai.**

Same example:

```javascript
document.getElementById("parent").addEventListener("click", function(event) {
    console.log(event.currentTarget);
});
```

Button par click karne par:

```text
event.currentTarget
        ↓
<div id="parent">
```

Kyunki listener **parent** par laga hua tha.

---

# ⭐ `target` vs `currentTarget`

Ye bahut important hai:

```text
USER NE JISPE CLICK KIYA
          ↓
      event.target


JIS ELEMENT PAR LISTENER LAGA HAI
          ↓
  event.currentTarget
```

### Example:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

```javascript
parent.addEventListener("click", function(event) {
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
});
```

Button click:

```text
target
  ↓
button

currentTarget
  ↓
parent
```

### 🧠 Easy trick:

> **target = "Kispe click hua?"**  
> **currentTarget = "Listener kahan laga hai?"**

---

# 3. `event.toElement`

`toElement` purani/legacy property hai.

Ye mainly mouse event ke case mein batati thi:

> **Mouse kis element ki taraf ja raha tha.**

Example:

```javascript
element.addEventListener("mouseout", function(event) {
    console.log(event.toElement);
});
```

⚠️ Modern JavaScript mein `toElement` ko generally use nahi karte.

Iske badle situation ke according:

```javascript
event.relatedTarget
```

use kiya jata hai.

---

# 4. `event.srcElement`

`srcElement` bhi **legacy property** hai.

Ye basically `event.target` ke purane/legacy version jaisa hai.

Example:

```javascript
element.addEventListener("click", function(event) {
    console.log(event.srcElement);
});
```

Modern JavaScript mein:

```javascript
event.target
```

use karo.

So:

```text
srcElement
    ↓
Legacy

target
    ↓
Modern ✅
```

---

# ⭐ Quick Comparison

| Property | Meaning | Modern? |
|---|---|---|
| `event.target` | Jis element par actual event hua | ✅ Yes |
| `event.currentTarget` | Jis element par listener laga hai | ✅ Yes |
| `event.toElement` | Mouse kis element ki taraf ja raha tha | ⚠️ Legacy |
| `event.srcElement` | Event ka source/target | ⚠️ Legacy |

---

# 🧠 Sabse Important Example

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", function(event) {

    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);

});
```

User button par click karta hai:

```text
              CLICK
                ↓
            <button>
                ↓
        event.target
                ↓
            <button>


        event.currentTarget
                ↓
             <div>
```

### One-line revision:

```text
target        → jispe event hua
currentTarget → jahan listener laga hai
srcElement    → target ka old/legacy version
toElement     → mouse ke old/legacy related property
```
