# JavaScript Events

## 🔥 Event kya hota hai?

JavaScript mein **event ka matlab hai browser mein koi action hona**.

Jaise:

- User ne button **click** kiya → `click` event
- User ne keyboard par key dabayi → `keydown` event
- User ne input mein kuch type kiya → `input` event
- User ne form submit kiya → `submit` event
- Mouse kisi element ke upar gaya → `mouseover` event

Simple language mein:

> **Event = koi action jo browser notice karta hai.**

---

## 1. Event Listener kya hota hai?

JavaScript ko hum bolte hain:

> "Bhai, agar ye event ho, toh ye kaam karna."

Iske liye hum use karte hain:

```javascript
addEventListener()
```

### Example:

```html
<button id="btn">Click Me</button>

<script>
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("Button clicked!");
});
</script>
```

### Isko line-by-line samjho:

```javascript
button.addEventListener("click", function () {
```

### Meaning:

- `button` ko observe karo, aur agar `click` ho toh function chalao.

```javascript
alert("Button clicked!");
```

- Click hone ke baad ye execute hoga.

### Flow:

```text
User button par click karta hai
          ↓
click event generate hota hai
          ↓
addEventListener usse detect karta hai
          ↓
function execute hota hai
          ↓
Alert show hota hai
```

---

## 2. Common Events

### 🖱️ Mouse Events

```javascript
click
dblclick
mouseover
mouseout
mousedown
mouseup
mousemove
```

### Example:

```javascript
button.addEventListener("click", function () {
    console.log("Clicked");
});
```

### ⌨️ Keyboard Events

```javascript
keydown
keyup
```

### Example:

```javascript
document.addEventListener("keydown", function () {
    console.log("Key pressed");
});
```

Jab bhi keyboard ki key press hogi, function chalega.

### 📝 Input Events

```javascript
input
change
focus
blur
```

### Example:

```javascript
const input = document.querySelector("#name");

input.addEventListener("input", function () {
    console.log("User is typing");
});
```

User jaise-jaise type karega, `input` event fire hoga.

### 📋 Form Events

```javascript
submit
```

### Example:

```javascript
form.addEventListener("submit", function () {
    console.log("Form submitted");
});
```

---

## 3. Event Object kya hota hai?

Jab event hota hai, JavaScript automatically ek **event object** provide karta hai.

```javascript
button.addEventListener("click", function (event) {
    console.log(event);
});
```

### Yahan:

`event` mein event ke baare mein information hoti hai.

### `event.target`

```javascript
button.addEventListener("click", function (event) {
    console.log(event.target);
});
```

### `event.target` batata hai:

**Exactly kis element par event hua?**

Agar button click kiya:

```text
event.target
      ↓
<button>
```

---

## 4. Keyboard Event ka Example

```javascript
document.addEventListener("keydown", function (event) {
    console.log(event.key);
});
```

Agar tum `A` press karoge:

```text
A
```

Agar `Enter` press karoge:

```text
Enter
```

Agar `Space` press karoge:

```text
Space
```

---

## 5. `preventDefault()` kya karta hai?

Browser ke kuch elements ka **default behavior** hota hai.

### Example:

Form submit karne par page reload ho sakta hai.

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
});
```

### `preventDefault()` ka matlab:

**Browser ka default kaam rok do.**

### Flow:

```text
User → Submit button
          ↓
     submit event
          ↓
   preventDefault()
          ↓
Default browser action STOP
          ↓
Apna JavaScript code execute
```

---

## ⭐ Sabse Important Concept

**Events ko abhi ke liye is formula se yaad rakho:**

```text
EVENT
  ↓
Action hua

EVENT LISTENER
  ↓
Action ko listen/observe karta hai

EVENT HANDLER
  ↓
Action hone par kya karna hai
```

### Example:

```javascript
button.addEventListener("click", function () {
    console.log("Hello");
});
```

### Yahan:

```text
click
  ↓
EVENT

addEventListener()
  ↓
EVENT LISTENER

function()
  ↓
EVENT HANDLER
```

---


