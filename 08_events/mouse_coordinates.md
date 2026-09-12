# 🖱️ `clientX`, `clientY`, `screenX`, `screenY`

Jab user mouse se click karta hai, JavaScript hume batata hai ki **mouse exactly kahan tha**.

---

# 1. `event.clientX`

`clientX` batata hai:

> **Browser ke visible area (viewport) ke left side se mouse kitne pixels door tha.**

```javascript
document.addEventListener("click", function(event) {
    console.log(event.clientX);
});
```

Agar output:

```text
500
```

Matlab mouse viewport ke **left se 500px** par tha.

```text
Browser Viewport

0px ---------------------- 500px ------→
                              🖱️
```

---

# 2. `event.clientY`

`clientY` batata hai:

> **Browser ke visible area (viewport) ke top se mouse kitne pixels neeche tha.**

```javascript
document.addEventListener("click", function(event) {
    console.log(event.clientY);
});
```

Agar output:

```text
300
```

Matlab mouse viewport ke **top se 300px neeche** tha.

```text
0px
 ↓
 ↓
300px        🖱️
 ↓
 ↓
```

---

# ⭐ `clientX` + `clientY`

Dono milke mouse ki **viewport ke andar exact position** batate hain.

```javascript
document.addEventListener("click", function(event) {

    console.log("X:", event.clientX);
    console.log("Y:", event.clientY);

});
```

Output:

```text
X: 500
Y: 300
```

Matlab:

```text
Viewport ke left se → 500px
Viewport ke top se  → 300px
```

---

# 3. `event.screenX`

`screenX` batata hai:

> **Puri computer screen ke left side se mouse kitne pixels door tha.**

```javascript
document.addEventListener("click", function(event) {
    console.log(event.screenX);
});
```

Example:

```text
Computer Screen

0px ----------------------------- 1200px
                         🖱️
```

Agar:

```text
screenX = 1200
```

Toh mouse screen ke left se 1200px par tha.

---

# 4. `event.screenY`

`screenY` batata hai:

> **Puri computer screen ke top se mouse kitne pixels neeche tha.**

```javascript
document.addEventListener("click", function(event) {
    console.log(event.screenY);
});
```

Example:

```text
Screen

0px
 ↓
 ↓
 ↓
400px        🖱️
 ↓
```

Agar:

```text
screenY = 400
```

Toh mouse screen ke top se 400px neeche tha.

---

# 🔥 `client` vs `screen`

Ye sabse important hai:

```text
CLIENT
 ↓
Browser ke visible viewport ke according

SCREEN
 ↓
Puri computer screen ke according
```

### Example:

Maan lo browser screen ke beech mein open hai:

```text
Computer Screen
┌──────────────────────────────────────┐
│                                      │
│       Browser Window                 │
│       ┌──────────────────────┐       │
│       │                      │       │
│       │         🖱️           │       │
│       │                      │       │
│       └──────────────────────┘       │
│                                      │
└──────────────────────────────────────┘
```

Mouse ki position:

```text
clientX = 300
clientY = 200
```

Matlab browser viewport ke according:

```text
300px → left se
200px → top se
```

Lekin:

```text
screenX = 800
screenY = 400
```

Matlab **computer ki complete screen** ke according position.

---

# ⭐ Quick Comparison

| Property | Coordinate kis ke according? |
|---|---|
| `clientX` | Viewport ka **left** |
| `clientY` | Viewport ka **top** |
| `screenX` | Computer screen ka **left** |
| `screenY` | Computer screen ka **top** |

---

# 🧠 Easy Trick

```text
clientX → Browser ke left se
clientY → Browser ke top se

screenX → Computer screen ke left se
screenY → Computer screen ke top se
```

---

# 🎯 Example Program

```javascript
document.addEventListener("click", function(event) {

    console.log("clientX:", event.clientX);
    console.log("clientY:", event.clientY);

    console.log("screenX:", event.screenX);
    console.log("screenY:", event.screenY);

});
```

Click karte hi tumhe mouse ki **viewport position + screen position** dono mil jayengi. 🖱️📍

---

# ⭐ One-Line Revision

> **`clientX/Y` = browser viewport ke according position.**

> **`screenX/Y` = complete computer screen ke according position.**
