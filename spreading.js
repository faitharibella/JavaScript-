

let age = [12,13,67,34,27,33,12,26,22]
const ageOld =[66,87,34,66,76]

let newAge = [...age,...ageOld]

// console.log(newAge)

age.pop()
// console.log(...age)




// console.log(newAge,newAge.length)

let sale = {
    customerName:"John",
    itemName: "nails",
    quantity: 3,
    itemCost: 20,
    tax: 1.5,
    isCredit: false,
}

let creditInformation={
    customerName: "Tendo",
    dueDate: "2026-04-01",
    closingBalance:50000
}

let newSale = {...sale}

let brandNewSale = {...sale,...creditInformation}

console.log(newSale)

console.log(brandNewSale)



function add(...numbers){
    console.log(numbers)

    return numbers.reduce((acc, num)=> acc + num, 0)
}



console.log(add(1,2,3,4,5,6,7,8,9,10))
