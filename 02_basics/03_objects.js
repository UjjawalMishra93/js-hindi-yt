// singleton

// Object.create

//++++++++++++ Object literals ++++++++++++++

const mySymb = Symbol("key1")


const JsUser = {
    name:"Ujjawal",
    "full name":"Ujjawal Mishra",
    [mySymb]:"mykey1",
    age:18,
    email:"ujjawal038@gmail.com",
    location:"Delhi",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.location);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymb]);
// console.log(typeof JsUser[mySymb]);

JsUser.email="themishraji05@gmail.com"
// Object.freeze(JsUser)

JsUser.email="ujjawal038@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


 

