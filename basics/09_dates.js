let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



// const now = new Date();
// console.log("Year:", now.getFullYear());
// console.log("Month:", now.getMonth() + 1); // Months are 0-based
// console.log("Date:", now.getDate());
// console.log("Day:", now.getDay()); // 0 = Sunday, 6 = Saturday
// console.log("Hours:", now.getHours());
// console.log("Minutes:", now.getMinutes());
// console.log("Seconds:", now.getSeconds());
// console.log("Milliseconds:", now.getMilliseconds());




// const now = new Date();
// console.log(now.toDateString());      // Thu Jul 30 2026
// console.log(now.toLocaleDateString()); // Based on locale
// console.log(now.toISOString());       // 2026-07-30T...




// const now = new Date();
// console.log(now.toTimeString());
// console.log(now.toLocaleTimeString());




// const now = new Date();
// const formatted =
//   `${now.getFullYear()}-` +
//   `${String(now.getMonth() + 1).padStart(2, "0")}-` +
//   `${String(now.getDate()).padStart(2, "0")} ` +
//   `${String(now.getHours()).padStart(2, "0")}:` +
//   `${String(now.getMinutes()).padStart(2, "0")}:` +
//   `${String(now.getSeconds()).padStart(2, "0")}`;

// console.log(formatted);
// Example: 2026-07-30 14:35:20