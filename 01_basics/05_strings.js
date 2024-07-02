const name = "Ujjawal"

const repoCount = 50

//console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("Ujjawal-Mishra-ji")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,2);
// console.log(anotherString);

const newString1="  hitesh  " 
// console.log(newString1);
// console.log(newString1.trim());

const url = "https://ujjawal.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

