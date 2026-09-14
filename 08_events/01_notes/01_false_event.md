# `false` in addEventListener()

Tumhara code:

```javascript
document.getElementById('owl').addEventListener('click', function(){ 
    alert("owl clicked") 
}, false)
```

Yahan `false` **event propagation** se related hai.

---

## 🔥 `addEventListener()` ka Syntax

```javascript
element.addEventListener(event, function, useCapture)
```

Tumhare code mein:

```javascript
addEventListener('click', function(){ ... }, false)
                                      ↑
                                  useCapture
```

Yahan `false` **third parameter** hai.

Is parameter ko `useCapture` kehte hain.

---

# 🔥 `false` ka matlab kya hai?

`false` ka matlab:

> **Event Capturing phase mein listener execute nahi hoga. Event Bubbling phase mein execute hoga.**

Matlab:

```text
false
  ↓
Bubbling Phase
```

Important:

> `false` ka matlab event ko enable/disable karna nahi hai.

Event normally fire hoga.

---

# 🧠 Event Propagation

Event propagation mein mainly 3 phases hoti hain:

1. **Capturing Phase**
2. **Target Phase**
3. **Bubbling Phase**

Maan lo HTML hai:

```html
<body>
    <div id="parent">
        <button id="owl">Owl</button>
    </div>
</body>
```

User `owl` button par click karta hai.

Event ka journey roughly:

```text
CAPTURING PHASE
        ↓
     document
        ↓
       body
        ↓
      parent
        ↓
       owl
        ↓
TARGET PHASE
        ↓
       owl
        ↓
BUBBLING PHASE
        ↓
      parent
        ↓
       body
        ↓
     document
```

Matlab event pehle **upar se neeche** jaata hai, phir **neeche se upar** aata hai.

---

# 1. `false` → Bubbling

Target element par event pahunchne ke baad event wapas parent ki taraf upar jaata hai.

Example:

```javascript
parent.addEventListener("click", function () {
    console.log("Parent clicked");
}, false);

owl.addEventListener("click", function () {
    console.log("Owl clicked");
}, false);
```

Agar `owl` par click kiya:

```text
Owl clicked
      ↓
Parent clicked
```

Pehle **owl ka handler** chalega, phir parent ka handler.

Kyun?

Kyuki `false` ka matlab hai listener **Bubbling phase** mein execute hoga.

---

# 2. `true` → Capturing

***Capturing ka matlab:*** event parent se hote hue target element ki taraf jaata hai.

Agar hum likhein:

```javascript
owl.addEventListener("click", function () {
    console.log("Owl clicked");
}, true);
```

Yahan:

```text
true
 ↓
Capturing Phase
```

`true` ka matlab hai listener ko **Capturing phase** ke liye register karna.

---

# 🧠 Easy Real-Life Example

Socho hierarchy hai:

```text
Grandfather
     ↓
   Father
     ↓
   Child
```

Child par click hua.

## Capturing Phase

```text
Grandfather
     ↓
Father
     ↓
Child
```

**Top → Bottom**

---

## Bubbling Phase

```text
Child
  ↓
Father
  ↓
Grandfather
```

**Bottom → Top**

---

# ⭐ `false` vs `true`

| Value | Phase | Direction |
|---|---|---|
| `false` | Bubbling | Bottom → Top |
| `true` | Capturing | Top → Bottom |

---

# 🎯 Tumhare Code ko Break Karke Samjho

```javascript
document.getElementById('owl').addEventListener('click', function(){ 
    alert("owl clicked") 
}, false)
```

### Part 1:

```javascript
document.getElementById('owl')
```

→ `owl` element ko select karo.

### Part 2:

```javascript
.addEventListener('click', function(){ ... })
```

→ Jab `click` event ho, function execute karo.

### Part 3:

```javascript
false
```

→ Listener ko **Bubbling phase** mein execute karo.

---

# 🚨 Important Point

`false` ka matlab:

❌ Event ko stop karna nahi

❌ Event ko disable karna nahi

❌ Function ko execute na karna nahi

✅ `false` = **Bubbling Phase**

And:

```text
false → Bubbling
true  → Capturing
```

---

# ⭐ One-Line Revision

> **`addEventListener()` ka third parameter `useCapture` hota hai. `false` ka matlab Bubbling phase aur `true` ka matlab Capturing phase.**
