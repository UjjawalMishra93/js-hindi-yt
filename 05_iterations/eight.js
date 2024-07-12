const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc,curr) =>acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemname:"js course",
        price: 2999
    },
    {
        itemname:"py course",
        price: 999
    },
    {
        itemname:"mobile dev course",
        price: 5999
    },
    {
        itemname:"data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);