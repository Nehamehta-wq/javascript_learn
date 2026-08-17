//forEach() array ke har element par function ko execute karta hai.



const coding = ["js", "ruby", "java", "python", "cpp"]

//1
// coding.forEach( function (val){
//     console.log(val);
// } )

//------------------------------------------------------------

//2
// coding.forEach( (item) => {
//     console.log(item);
// } )

//------------------------------------------------------------

//2
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//-------------------------------------------------------------

//3
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )




//**************************************************************************************************************



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
} )