// const branchOne = {
//     branchName:'Kampala',
//     manager : 'Faith J',
//     attendants: 2,
//     hadFarm: true
// };
// delete branchOne.hadFarm;
// // let currentManager = branchOne.manager;
// console.log(branchOne)

// const record = {
//       "Delivery Date": '2026-05-01'
//};
// i cant use a dot notation here because it will crush
// record.Delivery Date will give us an error
//we use brackets notations when dealing with properties with spaces inbetween ie "Delivery date", and if a property contains special characters ie"user-name" 
// console.log(record["Delivery Date"])

//if the key itself is stored in another variable, it is important tha we strictly use brackets because dot notation cabbot evaluate variables; it looks for literal strings


// const bts ={
//     group: 'BTS',
//     "stage name": 'Junkook',
//     "real name": 'Jeon Junkook',
//     "fan-favorite": true
// }
// let key ="real name"
// // console.log(bts[key])

// const branchOne = {attendants : 2};
 
// //modifying the existing property
// branchOne.attendants = 5;

// //adding a brand new property
// branchOne.priceToSell = 5500;

// console.log(branchOne)

// const branch ={name: 'Nyondo', staff: 5}

// for(const key in branch){
//     console.log(`Key: ${key}, Value: ${branch[key]}`)
// }

// const keys = Object.keys(branchOne)


let user = {
    firstName : "Paul",
    lastName : "Smith",
    age : 30,
    district: "Mbale",
    gender: "male",
}

let key = "lastname"
// console.log(key)

user.stream = "John"
user.height = 77
// console.log(user)

// const keys= Object.keys(user)

let salesRecord = {
    itemName : "Cement",
    quantityInUnits : 12,
    amountPaid : 500000,
    buyersName : "Baker",
}
salesRecord.creditDueDay = "Monday"
// console.log(salesRecord)

const items =["cement", "nails", "paint", "bricks", "sand"]


items.forEach((value, index) => {
     console.log(value,index)
})


function log(){
    callback()
}
log[()=>{
    console.log("Sale log:Added a new sale number 1")
}
]

function createCalculator(operation){
    if(operation == "add"){
        return function(a,b) {
            return a/b
        }
    }
}
const add = createCalculator("add")
// console.log(add(10,20))

let prices =[35_000,23_000,5_000, 46_000]

prices.map((price) => price*2)
let newPrices = prices.map

// let newPrices = prices.map((price) => price*2)
console.log(newPrices)

let firstName =["Irene", "Faith", "Jeon", "Joon"]
firstName = firstName.map((name) => name.toUpperCase())
console.log(firstName)


prices = prices.filter((price) => price >= 50_000)
console.log(prices)

let sales1 = {
    itemName : "Cement",
    quantity : 12,
    unitPrice : 3000
}
let sales2 = {
    itemName : "Nails",
    quantity : 12,
    unitPrice : 3000
}

let sales =[sales1,sales2]
console.log(sales)


const calcTotalCost = (quantity, costPrice, tax) => quantity * costPrice * (1 + tax)

sales.reduce((acc, sale) => {
    return acc + calcTotalCost(sale.quantity, sale.itemCost, sale.tax)
},0)

let totalSales= sales.reduce((acc, sale) => acc + (sale.quantity * sale.unitPrice), 0)

console.log(totalSales)