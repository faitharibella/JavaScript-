

const user = {
    firstName: 'John',
    age: 30,
};

// console.log(user)

const jsonUser= '{"firstName":"John","age":30,"isCredit":true}';

let parsedUser = JSON.parse(jsonUser)


try {    let invalidJson = '{"firstName":"John","age":30,"isCredit":true' // Missing closing brace
    JSON.parse(invalidJson)
}catch (error) {
    console.error("Error parsing JSON:", error.message)
}   
// console.log(jsonUser, typeof jsonUser)
// console.log(jsonUser.age)
// console.log(parsedUser, typeof parsedUser)

// console.log(parsedUser.age) 
// console.log(parsedUser.isCredit)


function login(userName, password) {
    let user = {userName, password}
    let stringUser = JSON.stringify(user)
    console.log(stringUser, typeof stringUser)
}

// login('faith', '123456')
class creditSle {
    constructor(name, product, quantity, price, tax, isCredit, date) {
        this.name = name;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.tax = tax;
        this.isCredit = isCredit;
        this.date = date;
    }
}


let creditSale  = new creditSle("faith","Cement",10, 150000, 0.18,"true", "2024-06-01")

console.log(creditSale)
let stringCreditSale = JSON.stringify(creditSale)
console.log(stringCreditSale, typeof stringCreditSale)


let order ={
    orderItems:[],
    custmerName: "faith",
    orderDate: "2024-06-01",
    totalAmount: 1000,
}
console.log(order)

// let mtnRequest = {
//     "msisdn": "256774123456",
//     amount: 1000,
//     network: "MTN",
//     currency: "UGX",
// }

let mtnRequestToPay = {
    msisdn: "256774123456",
    amount: 1000,
    amount: order.cartAmount,
    currency: order.currency,
}


let mtnRequest = JSON.parse(JSON.stringify(mtnRequestToPay))

console.log(mtnRequest, typeof mtnRequest)

// console.log(mtnRequest)
// let stringMtnRequest = JSON.stringify(mtnRequest)
// console.log(stringMtnRequest, typeof stringMtnRequest)