let ages = [23, 12, 3, 45, 34, 12]

let sumOfAges = ages.reduce((acc, age)=>{
    return acc + age
}, 0)

console.log(sumOfAges)



let _totalSales
 = sales.reduce((acc, sale) => acc + (sale.quantity ,sale.itemCost, sale.tax), 0)
