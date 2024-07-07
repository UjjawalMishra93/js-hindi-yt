// console.log("H");
// console.log("I");
// console.log("J");
// console.log("K");
// console.log("L");
// console.log("M");

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
// console.log(loginUsermessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1

}

// console.log(calculateCartPrice(200, 400 , 500 , 1000));

const user = {
    username : "Ujjawal",
    prices:"199"

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"sam",
    price:"999"
})


const myNewArray = [200, 400, 100 , 600 ]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100 , 600]));