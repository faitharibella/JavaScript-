let items = ["Nails", "Cement Bags", "Paint Tins", "Timber","Iron Sheets"]
console.log(items)

items.push("Wire Mesh")
console.log(items)

items.shift()
console.log(items)

let branch1Sales = ["150", "200"]
let branch2Sales = ["500","100"]

let totalSales = (branch1Sales.concat(branch2Sales))
console.log(totalSales)