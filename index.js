// this line of code prints out strings
// console.log("hello world", "this is the class of march 2026");

// console.log(`this is a back tick`);

// console.log(23);

// console.log(true)

// console.log(false)

// console.log(true)

// console.log("The sum of 10 and 4 is",10+4)
// console.log("The sum of 10.1034 and 3.1413 is",10.1034+3.1413)
// console.log("The difference of 10 and 5 is",10-5)

// console.log("the product of 10 and 5", 10*5)

// console.log(10+3-5*6)
// console.log(3/2)

// console.log(3%2)

// let radius = 5
// let areaOfACircle = PI = radius * radius;

// console.log("the area of a circle",radius,"with radius",areaOfACircle)

// let length = 6
// let width = 7
// let height = 9

// let areaOfARectangle = length * width * height

// console.log("the area of a rectange",length,"with length",width,"and width",height,"and height",areaOfARectangle)

// let number1 =4
// let number2= 8

// console.log(number1*number2)
// console.log("number1 before:", number1)
// number1=8
// console.log("number1 after", number1)

// console.log(3**2)

let num1 = 7;
let num2 = 9;

// console.log(num1 + num2)

// console.log(num1 - num2)

// console.log(num2 * num1)

// console.log(num2/num1)

console.log(num2 % num1);
let pricePerKg = 10000;
let quantityBought = 15;
let moneyPaid = 200000;

console.log("Total cost:", pricePerKg * quantityBought);
// console.log("Balance:", moneyPaid-(pricePerKg*quantityBought))

// let pricePerKg = 10000;
// let quantityBought = 15;
// let moneyPaid = 200000;

let totalCost = pricePerKg * quantityBought;
let balance = moneyPaid - totalCost;

// Display on the page
document.getElementById("total").textContent = "Total cost: " + totalCost;
document.getElementById("balance").textContent = "Balance: " + balance;

document.getElementById("message").textContent =
  "You bought " + quantityBought + "kgs of rice 💜";
