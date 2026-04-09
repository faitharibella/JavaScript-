let sales1 = {
    customerName:"Irene",
    itemName : "Cement",
    quantity : 12,
    unitPrice : 3000
}
let sales2 = {
    customerName:"Patrick",
    itemName : "Nails",
    quantity : 12,
    unitPrice : 3000
}

let sales =[sales1,sales2]
console.log(sales)

sales.push({
    customerName: "Sandra",
    itemName : "Sandpaper",
    quantity : 12,
    unitPrice : 3000
})

let customers = sales.map((sale)=> sale.customerName)
console.log(customers)


let availableCustomers = new Set(customers)
 console.log(availableCustomers)



let availableItems = new Set(["cement", "nails","cement", "sandpaper",])


availableItems.add("cement")
availableItems.add("wood")
availableItems.add("paint")

console.log(availableItems)

console.log(availableItems.has("cement bags"))

availableItems.delete("paint")

console.log(availableItems)

console.log(availableItems.size)

for(const item of availableItems){
    console.log(item)
}




let supplierName = new Set(["rose", "priscilla", "john","marvin", "rose", "john"])
console.log(supplierName)


supplierName.add("faith")
supplierName.add("dorcus")
supplierName.delete("john")


console.log(supplierName)
console.log(supplierName.size)