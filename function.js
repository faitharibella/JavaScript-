


// function average(numbers){



  

   
// }
// function average(numbers){
//       //block of code is going to be the function
//      let sum = 0
//      for(let i = 0; i<numbers.length; i++){
//         sum += numbers[i]
//      }

//      let average = sum/ numbers.length
//      return average
// //     console.log(average)
// }


// let ages = [23, 4, 54, 12, 40]
// let height= [130,170,1800,165,178,190]
// average(height)
// average(ages) //calling the function

// let heightAverage= average(height)
// let ageAverage = average(ages)
// // console.log(`The average age is ${ageAverage}`)

// // console.log(`The average height is ${heightAverage}`)


// function totalCost(quantity, costPrice, tax=0){
//     let total = quantity * costPrice
//     let taxValue = total * tax
//     let grandTotal = total + taxValue

//     return grandTotal
// }

// let finalCost = totalCost(1000, 35000,0.18)
// console.log(`The total cost of cement is ${finalCost}`)



// function addSale1(itemName, customerName, quatity, unitPrice,salesTax, isCredit){
//     console.log(`The product ${itemName} was bought by ${customerName} 
//     for the price of ${unitPrice * quatity} with tax of ${salesTax} 
//     and the payment method used was ${isCredit? "credit" : "cash"}
//     `)
// } 

// let itemName = "cement"
// let customerName = "Henry"


// function sayHello(){
//     console.log("Hello Refactory")
// }

// sayHello();

// function greetUser(userName){
//     console.log(`Hello ${userName}`)
// }

// greetUser("Jeon Junkook")

// write a function that returns the shortest word
function returnShortestWord(word1 , word2){
    if(word1.length<word2.length){
        return (word1)
    }
   else {
    return (word2)
   } 
} 


let word1 = "cement" 
let word2 = "nails"
// console.log(returnShortestWord(word1, word2))

const returnShortestWord = (word1, word2) =>{
  if(word1.length < word2.length){
    return word1
  }
  else{
    return word2
  }
}

