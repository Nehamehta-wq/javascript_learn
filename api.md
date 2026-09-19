# JavaScript API & XMLHttpRequest (XHR) --- Hinglish Notes

## 1. API kya hai?

**API = Application Programming Interface**

Simple language mein:

> API ek medium/bridge hai jiske through JavaScript kisi doosre
> system/server se data mangta ya bhejta hai.

### Basic Flow

``` text
JavaScript / Frontend
        |
        | HTTP Request
        ↓
      API
        |
        ↓
     Backend
        |
        ↓
    Database
```

Response wapas aata hai:

``` text
Database → Backend → API → JavaScript
```

------------------------------------------------------------------------

# 2. GitHub API Example

Example API URL:

``` text
https://api.github.com/users/hiteshchoudhary
```

Ye GitHub ka **API endpoint** hai.

Is URL ko browser mein open karne par GitHub JSON data return karta hai.

Example:

``` json
{
  "login": "hiteshchoudhary",
  "id": 11613311,
  "name": "Hitesh Choudhary",
  "location": "India",
  "followers": 4580,
  "following": 0,
  "public_repos": 66
}
```

Ye HTML webpage nahi hai.

Ye **JSON response/data** hai.

For example:

``` text
followers → 4580
public_repos → 66
```

------------------------------------------------------------------------

# 3. JavaScript se API call karna

JavaScript mein API call karne ke multiple ways hain.

Old/traditional way:

``` js
XMLHttpRequest
```

Modern/common way:

``` js
fetch()
```

------------------------------------------------------------------------

# 4. XMLHttpRequest (XHR)

`XMLHttpRequest` JavaScript ka built-in object hai jo:

-   Server ko request bhejne ke liye
-   Server ka response receive karne ke liye

use hota hai.

Simple meaning:

> **XMLHttpRequest = Server se communication karne ka JavaScript tool**

------------------------------------------------------------------------

# 5. Complete XHR Code

``` js
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)

        console.log(typeof data);

        console.log(data.followers);
    }
}

xhr.send();
```

Ab isko line-by-line samjho.

------------------------------------------------------------------------

# 6. API URL Store Karna

``` js
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
```

Yahan hum API ka URL ek variable mein store kar rahe hain.

Meaning:

> GitHub se `hiteshchoudhary` user ka data chahiye.

------------------------------------------------------------------------

# 7. XMLHttpRequest Object Banana

``` js
const xhr = new XMLHttpRequest();
```

Yahan `xhr` naam ka XMLHttpRequest object create hua.

Is object ka use server ke saath communication ke liye hoga.

``` text
xhr
 ↓
Request bhejega
 ↓
Response receive karega
```

------------------------------------------------------------------------

# 8. xhr.open()

``` js
xhr.open('GET', requestUrl)
```

`open()` request ko **prepare/configure** karta hai.

Yahan:

``` text
GET → HTTP method
requestUrl → API endpoint
```

### GET kya hota hai?

GET ka use generally **data lene/mangne** ke liye hota hai.

Common HTTP methods:

``` text
GET     → data lena
POST    → data bhejna/create karna
PUT     → data update karna
PATCH   → partially update karna
DELETE  → data delete karna
```

Important:

> `open()` request ko actually send nahi karta. Sirf request prepare
> karta hai.

------------------------------------------------------------------------

# 9. onreadystatechange

``` js
xhr.onreadystatechange = function(){
```

Request ke process mein `readyState` change hoti rehti hai.

`onreadystatechange` ek callback function hai jo readyState change hone
par execute hota hai.

Simple:

> "Jab request ki state change ho, ye function chala dena."

------------------------------------------------------------------------

# 10. readyState

``` js
console.log(xhr.readyState);
```

`readyState` batata hai ki request abhi kis stage par hai.

### Important readyState values

  Value   Meaning
  ------- --------------------------------------------------
  `0`     Request initialize nahi hui
  `1`     Request open ho gayi
  `2`     Request send ho gayi / response headers received
  `3`     Response receive ho raha hai
  `4`     Response completely receive ho gaya

Sabse important:

``` js
xhr.readyState === 4
```

Meaning:

> **Response completely aa chuka hai.**

------------------------------------------------------------------------

# 11. readyState === 4

``` js
if (xhr.readyState === 4) {
```

Hum check kar rahe hain:

> Kya server ka complete response aa gaya?

Agar haan, tab andar ka code execute hoga.

------------------------------------------------------------------------

# 12. responseText

``` js
this.responseText
```

Server se jo response aata hai, woh `responseText` mein milta hai.

Example:

``` js
'{"login":"hiteshchoudhary","followers":4580}'
```

Initially ye **string/text** hota hai.

------------------------------------------------------------------------

# 13. JSON.parse()

``` js
const data = JSON.parse(this.responseText)
```

API ka JSON response string ke form mein mila.

`JSON.parse()` us JSON string ko JavaScript object mein convert karta
hai.

### Before JSON.parse()

``` js
'{"login":"hiteshchoudhary","followers":4580}'
```

Type:

``` text
string
```

### After JSON.parse()

``` js
{
    login: "hiteshchoudhary",
    followers: 4580
}
```

Type:

``` text
object
```

### Simple Flow

``` text
responseText
     ↓
JSON.parse()
     ↓
JavaScript Object
```

------------------------------------------------------------------------

# 14. typeof data

``` js
console.log(typeof data);
```

`JSON.parse()` ke baad `data` ek JavaScript object hai.

Output:

``` text
object
```

------------------------------------------------------------------------

# 15. data.followers

``` js
console.log(data.followers);
```

API response mein:

``` json
{
  "login": "hiteshchoudhary",
  "followers": 4580
}
```

Isliye:

``` js
data.followers
```

ka output hoga:

``` text
4580
```

Similarly:

``` js
data.login
```

Output:

``` text
hiteshchoudhary
```

Aur:

``` js
data.public_repos
```

Output:

``` text
66
```

------------------------------------------------------------------------

# 16. xhr.send()

``` js
xhr.send();
```

Ye **actual request server ko send karta hai**.

Yaad rakho:

``` text
xhr.open()
    ↓
Request prepare
    ↓
xhr.send()
    ↓
Request actually sent
```

------------------------------------------------------------------------

# 17. Complete Request-Response Flow

Pure code ka flow:

``` text
const requestUrl
        ↓
API URL ready
        ↓
new XMLHttpRequest()
        ↓
xhr.open("GET", url)
        ↓
Request prepare
        ↓
onreadystatechange callback set
        ↓
xhr.send()
        ↓
GitHub server ko request
        ↓
Server response
        ↓
readyState changes
        ↓
readyState === 4
        ↓
responseText
        ↓
JSON.parse()
        ↓
JavaScript Object
        ↓
data.followers
        ↓
4580
```

------------------------------------------------------------------------

# 18. Example Output

Code:

``` js
console.log(xhr.readyState);
```

Request ke different stages par values aa sakti hain:

``` text
1
2
3
4
object
4580
```

Important point:

> Exact number of callback executions browser/request behavior par
> depend kar sakte hain. Main important state `4` hai, jo complete
> response ko indicate karti hai.

------------------------------------------------------------------------

# 19. XHR vs fetch()

### XMLHttpRequest

``` js
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data.followers);
    }
};

xhr.send();
```

### fetch()

Same ka modern version:

``` js
fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then(data => {
        console.log(data.followers);
    });
```

`fetch()` generally easier aur modern JavaScript code mein commonly used
hai.

------------------------------------------------------------------------

# 20. Important Terms --- Quick Revision

  -----------------------------------------------------------------------
  Term                                Meaning
  ----------------------------------- -----------------------------------
  API                                 Applications ke beech communication
                                      ka interface

  Endpoint                            Specific API URL

  HTTP GET                            Data retrieve karna

  XMLHttpRequest                      Server request/response handle
                                      karne ka JS object

  `open()`                            Request prepare/configure karta hai

  `send()`                            Request actually send karta hai

  `readyState`                        Request ki current state

  `readyState === 4`                  Complete response received

  `responseText`                      Server ka text response

  `JSON.parse()`                      JSON string ko JS object mein
                                      convert karta hai

  `typeof`                            Variable ka data type check karta
                                      hai

  `data.followers`                    Response object se followers
                                      property access karta hai
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 21. One-Line Revision 🧠

> **XHR ke through hum API ko GET request bhejte hain, server ka
> response receive karte hain, `JSON.parse()` se JSON string ko object
> mein convert karte hain, aur phir object ki required properties access
> karte hain.**

------------------------------------------------------------------------

# 22. Real-World Example

Maan lo React mein GitHub profile card banana hai.

API:

``` text
https://api.github.com/users/hiteshchoudhary
```

API se data:

``` json
{
  "login": "hiteshchoudhary",
  "followers": 4580,
  "public_repos": 66
}
```

JavaScript:

``` js
fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then(data => {
        console.log(data.login);
        console.log(data.followers);
        console.log(data.public_repos);
    });
```

Frontend mein ye information show kar sakte hain:

``` text
GitHub Username: hiteshchoudhary
Followers: 4580
Public Repositories: 66
```

------------------------------------------------------------------------

# Final Mental Model 🚀

``` text
API
 ↓
URL / Endpoint
 ↓
HTTP Request
 ↓
Server
 ↓
JSON Response
 ↓
JavaScript
 ↓
JSON.parse() / response.json()
 ↓
JavaScript Object
 ↓
data.followers
```

**XHR = old/traditional API calling method**

**fetch() = modern API calling method**
