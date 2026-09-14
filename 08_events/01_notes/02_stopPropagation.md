# `event.stopPropagation()`

`event.stopPropagation()` ka use **event ko parent elements tak propagate hone se rokne** ke liye hota hai. 🛑

---

## Example

HTML:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

JavaScript:

```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function(event) {
    console.log("Button clicked");
    event.stopPropagation();
});
```

### Kya hoga?

Agar button par click kiya:

```text
Button clicked
```

Sirf ye print hoga.

Normally `stopPropagation()` ke bina:

```text
Button clicked
Parent clicked
```

Kyunki click event **button → parent** bubble karta hai.

---

## Simple Flow 🧠

### Without `stopPropagation()`

```text
Button click
    ↓
Button handler
    ↓
Parent handler
    ↓
Grandparent handler
```

### With `stopPropagation()`

```text
Button click
    ↓
Button handler
    ↓
🛑 STOP
```

---

## `stopPropagation()` vs `preventDefault()`

```text
stopPropagation() → event ko parents tak jaane se rokta hai

preventDefault()  → browser ka default action rokta hai
```

### Default action rokna

```javascript
event.preventDefault();
```

### Event ko parent tak bubble hone se rokna

```javascript
event.stopPropagation();
```

---

## Important Point

`stopPropagation()` **default browser action ko stop nahi karta**.

Example:

```javascript
button.addEventListener("click", function(event) {
    event.stopPropagation();
});
```

Isse parent ka click handler nahi chalega, lekin default browser behavior automatically stop nahi hoga.

---

## Quick Revision 🧠

```text
stopPropagation()
        ↓
Event propagation rokta hai
        ↓
Parent/ancestor handlers tak event nahi jaata
```

### Spelling

```javascript
event.stopPropagation();
```

✅ Correct: `stopPropagation()`

❌ Wrong: `stopPropogation()`
