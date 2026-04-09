// let colorOfLight = "yellow"

// if(colorOfLight === "green"){
//     console.log("The traffic light is currently green")
// } else if( colorOfLight === "red"){
//     console.log("The traffic light is red, please stop")
// }else{
//     console.log("The traffic light is currently yellow, please be careful")
// }

   let reportedAge = 18
   let gender = "M"

if (reportedAge >= 18) {
    console.log("These are adults")
} else if (gender === "LGBTQ") {
    console.log("These are LGBTQ")
} else if (gender === "male") {
    console.log("These are men")
} else {
    console.log("These are Female")
}

 let dayOfWeek = 0

switch(dayOfWeek){
    case 0: console.log("Today is Monday");
    break;
    case 1: console.log("Today is Tuesday")
    break;
    case 2: onslotchange.log("Today is not Wednesday")
//     break;
//    default: console.log("Today is not known")

 }

// 000 2359
let timeOfDay = "0000"
let customWelcomeMessage

//       switch(timeOfDay){
//     case "0000": customWelcomeMessage="Welcome, you night owl"
//     break;
//     case "0800": customWelcomeMessage="Its not true, the early bird dosen't catch the worm"
//     break;
//     case "1200": customWelcomeMessage="Good afternoon, I hope you have lunch money"
//     break;
//     default: customWelcomeMessage ="Please fix your clock"
//  }

customWelcomeMessage=timeOfDay= "1200"? "Good Morning, I hope you have a nice day": "Have a good evening"
console.log(customWelcomeMessage)

let discount= gender === "M" ? 0.1 :0.4
// if (gender=== "M"){
//     discount=0.1
// }else{
//     discount=0.4
// }

let priceOfCurtains = 45000

console.log(priceOfCurtains *(1-discount))

let buyerName = "Ari" 
let amountDue =20000
let itemName = "cement" 
if (buyerName.length>=2 && amountDue >= 10000 && itemName.length >0)
    { 
   console.log("The record is valid")
}else{
    console.log("The record is invalid")
}
