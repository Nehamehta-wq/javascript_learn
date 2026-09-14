# altKey, ctrlKey, shiftKey, keyCode

## 1. `event.altKey`

`event.altKey` check karta hai ki **Alt key press hui hai ya nahi**.

Ye `true` ya `false` return karta hai.

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.altKey);
});
```

Agar Alt press karke key dabayi:

```text
true
```

Agar Alt press nahi ki:

```text
false
```

---

## 2. `event.ctrlKey`

`event.ctrlKey` check karta hai ki **Ctrl key press hui hai ya nahi**.

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.ctrlKey);
});
```

Example:

```javascript
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey) {
        console.log("Ctrl press hui hai");
    }
});
```

### Real Example: Ctrl + S

```javascript
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        console.log("Save");
    }
});
```

Yahan:

- `event.ctrlKey` → Ctrl press hui?
- `event.key === "s"` → S key press hui?
- `&&` → dono conditions true honi chahiye.

---

## 3. `event.shiftKey`

`event.shiftKey` check karta hai ki **Shift key press hui hai ya nahi**.

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.shiftKey);
});
```

Example:

```javascript
document.addEventListener("keydown", function(event) {
    if (event.shiftKey) {
        console.log("Shift press hui hai");
    }
});
```

Agar `Shift + A` press karoge, to `event.shiftKey` `true` hoga.

---

## 4. `event.keyCode`

`event.keyCode` kisi key ka **numeric code** deta tha.

Example:

| Key | keyCode |
|---|---:|
| A | 65 |
| B | 66 |
| Enter | 13 |
| Space | 32 |
| Escape | 27 |

Example:

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.keyCode);
});
```

Agar `A` press kiya:

```text
65
```

Agar `Enter` press kiya:

```text
13
```

### ⚠️ Important

`keyCode` **old/deprecated property** hai.

Modern JavaScript mein `event.key` ya `event.code` use karna better hai.

Instead of:

```javascript
if (event.keyCode === 65) {
    console.log("A pressed");
}
```

Use:

```javascript
if (event.key === "a") {
    console.log("A pressed");
}
```

Ya:

```javascript
if (event.code === "KeyA") {
    console.log("A pressed");
}
```

---

# Quick Revision

| Property | Meaning |
|---|---|
| `event.altKey` | Alt press hui ya nahi |
| `event.ctrlKey` | Ctrl press hui ya nahi |
| `event.shiftKey` | Shift press hui ya nahi |
| `event.keyCode` | Key ka old numeric code |
| `event.key` | Actual key value |
| `event.code` | Physical key ka code |

### Example

```javascript
document.addEventListener("keydown", function(event) {

    console.log("Alt:", event.altKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Shift:", event.shiftKey);
    console.log("Key:", event.key);
    console.log("Code:", event.code);

});
```

### Simple yaad rakhna 🧠

```text
altKey   → Alt daba?
ctrlKey  → Ctrl daba?
shiftKey → Shift daba?
keyCode  → key ka old number
key      → kaunsi key?
code     → kaunsi physical key?
```
