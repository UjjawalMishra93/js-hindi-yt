// let myName = "Ujjawal    "
// let myChannel = "chai    "

// console.log(myName.trim().length);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);

}
//heroPower.hitesh();
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance


const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makevideo:true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:"JS assignment",
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "
String.prototype.truelength = function(){
    //console.log(`${this}`);
    
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUsername.truelength();
"hitesh".truelength();
"iceTea".truelength();