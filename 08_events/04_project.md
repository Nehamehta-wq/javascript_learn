## Project 6 (unlimited color)

``` javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
 

```

----

# Project 6 - Unlimited Color 🎨

## Goal

**Start button dabao → background har 1 second mein random color change ho.**

**Stop button dabao → color changing stop ho jaye.**

---

## 1. `randomColor()` Function

```javascript
const randomColor = function () {

    const hex = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};
```

Ye function ek **random hexadecimal color** generate karta hai.

Example:

```text
#A3F91C
#12BC45
#FF09DA
```

### `hex`

```javascript
const hex = '0123456789ABCDEF';
```

Hexadecimal mein total 16 characters hote hain:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

### `color`

```javascript
let color = '#';
```

Har hexadecimal color `#` se start hota hai.

### `for` loop

```javascript
for (let i = 0; i < 6; i++)
```

Loop 6 times chalega kyunki `#` ke baad color mein 6 characters hote hain.

Example:

```text
# F F 0 0 A A
  └───────┘
    6 chars
```

### Random character

```javascript
hex[Math.floor(Math.random() * 16)]
```

- `Math.random()` → `0` se less than `1` random number
- `* 16` → `0` se less than `16`
- `Math.floor()` → integer/index `0` se `15`
- `hex[index]` → random character

6 random characters add hone ke baad color banega.

Example:

```text
#3AF1C5
```

---

## 2. `intervalId`

```javascript
let intervalId;
```

Initially:

```text
intervalId = undefined
```

Is variable mein `setInterval()` ki ID store hogi.

---

## 3. `startChangingColor()`

```javascript
const startChangingColor = function () {

    if (!intervalId) {

        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {

        document.body.style.backgroundColor = randomColor();

    }
};
```

Ye function **Start button click hone par** chalega.

---

## 4. `if (!intervalId)`

```javascript
if (!intervalId)
```

`!` ka matlab **NOT**.

Initially:

```text
intervalId = undefined
```

Therefore:

```javascript
!intervalId
```

is `true`.

Isliye interval start ho jayega.

Ye condition ensure karti hai ki **multiple intervals ek saath create na hon**.

Agar Start button baar-baar click kiya jaye, tab bhi jab interval already running hai to naya interval create nahi hoga.

---

## 5. `setInterval()`

```javascript
intervalId = setInterval(changeBgColor, 1000);
```

Meaning:

> `changeBgColor` function ko har **1000 milliseconds = 1 second** mein execute karo.

`setInterval()` ek interval ID return karta hai aur woh ID `intervalId` mein store hoti hai.

Flow:

```text
Start button
    ↓
startChangingColor()
    ↓
setInterval()
    ↓
changeBgColor() every 1 second
```

---

## 6. `changeBgColor()`

```javascript
function changeBgColor() {

    document.body.style.backgroundColor = randomColor();

}
```

Ye actual mein background color change karta hai.

Pehle:

```javascript
randomColor()
```

maan lo return karta hai:

```text
#FF00AA
```

Then:

```javascript
document.body.style.backgroundColor = "#FF00AA";
```

Background change ho jayega.

Next second dobara random color generate hoga.

Example:

```text
#FF00AA
    ↓
#32AC91
    ↓
#9A12FD
    ↓
#00C4A7
    ↓
...
```

---

## 7. `stopChangingColor()`

```javascript
const stopChangingColor = function () {

    clearInterval(intervalId);

    intervalId = null;

};
```

Ye function **Stop button click hone par** chalega.

### `clearInterval()`

```javascript
clearInterval(intervalId);
```

Jo interval `intervalId` mein stored hai, usko stop kar deta hai.

```text
setInterval()
     ↓
Every 1 second
     ↓
Color changes
     ↓
clearInterval(intervalId)
     ↓
STOP ❌
```

### `intervalId = null`

```javascript
intervalId = null;
```

Interval stop hone ke baad variable ko reset karte hain.

Isse dobara Start click karne par:

```javascript
if (!intervalId)
```

true ho sakta hai aur naya interval start ho sakta hai.

---

## 8. Start Button

```javascript
document.querySelector('#start')
    .addEventListener('click', startChangingColor);
```

Meaning:

> `#start` button par click hone par `startChangingColor` function execute karo.

Parentheses nahi lagaye:

```javascript
startChangingColor
```

kyunki function ko **click hone par** execute karna hai.

---

## 9. Stop Button

```javascript
document.querySelector('#stop')
    .addEventListener('click', stopChangingColor);
```

Meaning:

> Stop button click → `stopChangingColor()` execute.

---

# Complete Flow

```text
                  START BUTTON
                       ↓
              startChangingColor()
                       ↓
                if (!intervalId)
                       ↓
                 setInterval()
                       ↓
                Every 1 second
                       ↓
                changeBgColor()
                       ↓
                  randomColor()
                       ↓
                   "#A3F91C"
                       ↓
             Background changes 🎨
                       ↓
                     repeat
                       ↓
                  STOP BUTTON
                       ↓
             clearInterval(intervalId)
                       ↓
             Color changing stops ❌
                       ↓
              intervalId = null
```

---

# Why `if (!intervalId)`?

Agar condition nahi hoti aur user Start ko multiple times click karta:

```text
Start → Interval 1
Start → Interval 2
Start → Interval 3
```

Multiple intervals chal sakte hain.

But:

```javascript
if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
}
```

ki wajah se ek time par **sirf ek interval** chalega.

---

# Important 4 Lines 🧠

```javascript
let intervalId;
```

➡️ Interval ki ID store karne ke liye.

```javascript
intervalId = setInterval(changeBgColor, 1000);
```

➡️ Har second background color change karne ke liye.

```javascript
clearInterval(intervalId);
```

➡️ Color changing stop karne ke liye.

```javascript
intervalId = null;
```

➡️ Interval ko reset karne ke liye, taaki baad mein dobara Start kar saken.

---

# One-Line Summary

> **Start → interval banao → har second random color generate karo → background change karo → Stop → interval clear karo → `intervalId = null` karke reset karo.** 🎨
