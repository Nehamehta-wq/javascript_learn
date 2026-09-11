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

**addEventListener()**

Example:
<button id="btn">Click Me</button>

<script>
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("Button clicked!");
});
</script>


**Isko line-by-line samjho:**
button.addEventListener("click", function () {



**Meaning:**
-button ko observe karo, aur agar click ho toh function chalao.
-alert("Button clicked!");
-Click hone ke baad ye execute hoga.



Flow:
            User button par click karta hai
                    ↓
            click event generate hota hai
                    ↓
            addEventListener usse detect karta hai
                    ↓
            function execute hota hai
                    ↓
            Alert show hota hai


---

## 2. Common Events

🖱️ Mouse Events
-click
-dblclick
-mouseover
-mouseout
-mousedown
-mouseup
-mousemove

**Example:**

button.addEventListener("click", function () {
    console.log("Clicked");
});

**⌨️ Keyboard Events**
-keydown
-keyup

Example:
document.addEventListener("keydown", function () {
    console.log("Key pressed");
});

Jab bhi keyboard ki key press hogi, function chalega.


**📝 Input Events**
-input
-change
-focus
-blur

Example:
const input = document.querySelector("#name");

input.addEventListener("input", function () {
    console.log("User is typing");
});

User jaise-jaise type karega, input event fire hoga.


**📋 Form Events**
-submit

Example:
form.addEventListener("submit", function () {
    console.log("Form submitted");
});


---

## 3. Event Object kya hota hai?

Jab event hota hai, JavaScript automatically ek event object provide karta hai.

button.addEventListener("click", function (event) {
    console.log(event);
});


**Yahan:**
event : mein event ke baare mein information hoti hai.


event.target
button.addEventListener("click", function (event) {
    console.log(event.target);
});


**event.target batata hai:**
Exactly kis element par event hua?


Agar button click kiya:

event.target
      ↓
<button>


---


## 4. Keyboard Event ka Example

document.addEventListener("keydown", function (event) {
    console.log(event.key);
});

Agar tum A press karoge: A

Agar Enter press karoge: Enter

Agar Space press karoge: Space


---


## 5. preventDefault() kya karta hai?

Browser ke kuch elements ka default behavior hota hai.


**Example:**
Form submit karne par page reload ho sakta hai.

form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted");
});


**preventDefault() ka matlab:**
Browser ka default kaam rok do.


**Flow:**

User → Submit button
          ↓
     submit event
          ↓
   preventDefault()
          ↓
Default browser action STOP
          ↓
Apna JavaScript code execute


---

## ⭐ Sabse Important Concept

**Events ko abhi ke liye is formula se yaad rakho:**

EVENT
  ↓
Action hua

EVENT LISTENER
  ↓
Action ko listen/observe karta hai

EVENT HANDLER
  ↓
Action hone par kya karna hai


**Example:**

button.addEventListener("click", function () {
    console.log("Hello");
});


**Yahan:**

click
  ↓
EVENT

addEventListener()
  ↓
EVENT LISTENER

function()
  ↓
EVENT HANDLER
