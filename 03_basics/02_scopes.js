// Scope in JavaScript means:
// "Where a variable can be accessed in your program."


// let a=10
// const b=20
// var c=30

if(true){
    let a=10
    const b=20
    var c=30
}

//console.log(a) // will give error
//console.log(b) // will give error
// console.log(c)



function one(){
    const username = "hitesh"
    // console.log("TWO")

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // will give error
    // console.log("THREE")
    two()

    // console.log("FOUR")
}
// one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))n // no error
function addone(num){
    return num + 1
}


// addTwo(5) //error
const addTwo = function(num){
    return num + 2
}