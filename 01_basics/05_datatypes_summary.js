
//  Primitive datatype
  // 7 types : String , Number , Boolean , null , undefined ,Symbol ,Bigint
         
  
const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

// const bigNumber = 34453536356356364n




// java script is dynamic language

// Reference (Non - primitive) datatypes
 // Array , Objects , Functions 


const heros = ["shaktiman","nagraj","doga"]
let myObj={
    name:"Ujjawal",
    age:19,
}

const myFunction = function(){
    // console.log("Hello world");

}

// console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(non primitive)

let myYtName = "ujjawalmishra.com"

let anothername = myYtName
console.log(anothername);

let userOne ={
    email: "user@google.com",
    Upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

