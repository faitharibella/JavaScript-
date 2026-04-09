

// let numbers = [1,2,3]

// // console.log(numbers[0])
// // console.log(numbers[1])
// // console.log(numbers[2])


// const [a,b,c] = numbers
// console.log(a,b,c)
// console.log(a)
// console.log(b)

// let sale = ["Maria", "Cement", 50, 35_000, 0.18,true]

// // const [customer, product, qunatity, costprice, tax,isCredit] = sale

// // skip elements
// const [customer, ,quantity,,] = sale
// console.log(customer)

// console.log(quantity)
// console.log(sale)


// let procurement = ["nails", 50]

// const [items, productQuantity, costPrice=0] = procurement




// let user = {name:"Faith", age : 19, email: "fahaisibwe@student.refactory.academy",}

//  const {email:userEmail,name, age,email, gender="F"} = user
//  console.log(items)
// console.log(productQuantity)
// console.log(costPrice)
// console.log(procurement)
// console.log(age, userEmail, gender)


let userInformation ={
    name: "Paul",
    age:25,
    email:"paul@example.com",
    loading: false
}

let branchInformation ={
    branchName: "Nairobi Branch",
    branchCode: "NB",
    branchLocation: "Nairobi",
    loading: true
}


// const{branchName,branchCode}= branchInformation
// // incase i wanna join both values 
// console.log(branchName, branchCode)

// incase i want only one value
// console.log(branchName)
// console.log(branchCode)
// // This is the professional way to write this
// console.log(`Branch: ${branchName}, Code: ${branchCode}`)

const{name,age,email,branchName,branchCode,branchLocation,loading:branchLoading}={...userInformation,...branchInformation}
//  const combined = {...userInformation,...branchInformation}
//  console.log(combined)

// console.log(name,age,email,branchName,branchCode,branchLocation,branchLoading)
// console.log(`User: ${name}, Age: ${age}, Email: ${email}, Branch: ${branchName}, Code: ${branchCode}, Location: ${branchLocation}`)

const userDetails = {...userInformation,...branchInformation}
// console.log(userDetails)


const records ={id:2, product:'Cement', price: 250_000}

// const safeCopy ={...records}

// safeCopy.creditDue = 350_000

// safeCopy.date = "2026-03-12 09:00"
// console.log(safeCopy)

const creditSale ={
    nameOfBuyer : "Richard",
    amountDue : 250_000,
    dueDate : "2026-03-12 09:00",
    salesAgentName: "Faith"
}

const { nameOfBuyer, amountDue}= creditSale

console.log(nameOfBuyer)
console.log(amountDue)

let kampalaStock =["Cement","Nails", "Rubber","Timber"]
let branch2Stock= ["Wood", "Pavers", "Ironbars", "Ironsheets"]

const stock = [...kampalaStock,...branch2Stock] 

console.log(stock)

const sales1 ={price: 300_000, product: "Cement", quantity: 50}

const safeCopy= {...sales1}

safeCopy.priceToSell = 700_000

console.log
(safeCopy)






