//let sumTo10 = 1+2+3+4+5+6+7+8+9+10
//console.log(sumTo10)

// let sum = 0
// for(let i = 1; i<=10; i= i + 1){
//     console.log(i)
//     sum = sum + i
// }
// console.log(sum)

//--for loop-------------------------
// let sales = [350_000, 400_000, 750_000, 35_000, 34_000];

// let totalSales = 0;

// for (let i = 0; i < sales.length; i++) {
//   totalSales = totalSales + sales[i];
// }
// console.log(totalSales);

// while loop

// let isLoggedIn = false;

// let trialAttempt = 0;
//    let numberOfTrials = 0
// while (isLoggedIn == false) {
//   console.log("Please log in");
//   trialAttempt = trialAttempt + 1;

//   if ((trialAttempt == numberOfTrials)) {
//     isLoggedIn = true;
//   }
// }





// let currentIndex = 0
// let newtotalsales = 0
// while(currentIndex < sales.length) {
//     //console.log(currentIndex)

  
//     newtotalsales = newtotalsales + sales[currentIndex]
//     currentIndex += 1  
// }

// //console.log(newtotalsales)

// let forOfSum = 0
// for(let element of sales) {
//     forOfSum +=element
// }

//  //console.log(forOfSum)

// for(let i = 1; i<10; i++){
//      //console.log(i)
//     if(i % 3 === 0){
//         continue
//     }
//     console.log(i,"multiples")
// }

let sum = 0
for(let i = 1; i <= 5; i++){

    sum += i
   console.log(i)
}
console.log(sum)

let isABTSmember = false;
let numberOfTrials = 3;
let trialAttempt = 0;
// while (isABTSmember == false) {
//   console.log("BTS 💜");
//   trialAttempt = trialAttempt + 1;

//   if ((trialAttempt == numberOfTrials)) {
//     isABTSmember = true;
//   }
// }

// while loop
let timePassed = 0
let trafficLight = "red"

while(trafficLight=== "red"){

  console.log("The traffic light is red, please stop")


  if(timePassed >= 5){

    trafficLight = "green"
  }
   timePassed = timePassed + 1

   if(timePassed >= 5){

    trafficLight = "green"
    console.log("The traffic light is now green, you can procced")  
   }

   
}
