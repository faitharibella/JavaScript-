class Sale{

    customerName=""
    itemName=""
    quantity= 0
    costPrice= 2500
    tax=0.18
    isCredit= false
    

    constructor(customerName,itemName,quantity,costPrice,tax,isCredit){
        this.customerName=customerName
        this.itemName=itemName
        this.quantity=quantity
        this.costPrice=costPrice
        this.tax=tax
        this.isCredit=isCredit
    }


    calculateTotalCost(){
        return this.quantity * this.costPrice * (1 + this.tax)
    }
}


class creditSales extends Sale {




    constructor(customerName,itemName,quantity,costPrice,tax,isCredit,dueDate,status){
        super(customerName,itemName,quantity,costPrice,tax,isCredit)
        this.dueDate = dueDate
        this.status = status
    }

    getdaysDue(){
        let today = new Date()
        let dueDate = new Date(this.dueDate)
        let diffInTime = dueDate.getTime() - today.getTime()
        let diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))
        return diffInDays
    }
}


// let sale = newsale()
// console.log(sale)
// console.log(sale.customerName)

let sale1 = new Sale("Maria", "Cement", 50, 35_000, 0.18,true)
let sale2 = new Sale("John", "Bricks", 100, 20_000, 0.18,false)

console.log(sale1)
console.log(sale2)

console.log(sale1.calculateTotalCost())



class NGHStock{
    supplierName=""
    nameOfItem=""
    quantityInUnits=""
    tonnage= true


    constructor(supplierName,nameOfItem,quantityInUnits,tonnage){
        this.supplierName=supplierName
        this.nameOfItem=nameOfItem
        this.quantityInUnits=quantityInUnits
        this.tonnage=tonnage
    }

    calculateTotalCost(costPerUnit){
        return this.quantityInUnits * costPerUnit
    }

    validateQuantity(){
        if(this.quantityInUnits > 0){
            return "true"
        } else {
            return "false"
        }
}
}

let stock1 = new NGHStock("Hima Cement Suppliers", "Cement", 1000, true)
let stock2 = new NGHStock("Roofings Steel Suppliers", "Steel", 500, false)


console.log(stock1)
console.log(stock2)

console.log(stock1.validateQuantity())
console.log(stock2.validateQuantity())


