console.log("H");
console.log("I");
console.log("J");
console.log("K");
console.log("L");
console.log("M");

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
    console.log("M");
}

// sayMyName();

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1 , num2){
    
    // let result  = num1 + num2
    // return result

    return num1 + num2
    
}

const result = addTwoNumbers(3 ,5);

// console.log("Result:",result);

function loginUsermessage(username = "Sam"){
    if(!username){
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUsermessage("Ujjawal"));
console.log(loginUsermessage());

