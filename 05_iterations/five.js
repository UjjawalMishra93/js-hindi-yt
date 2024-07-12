const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item , index, arr) => {
   // console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"Js"
    },
    {
        languageName:"java",
        languageFileName:"Java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    console.log(item.languageFileName);
} )