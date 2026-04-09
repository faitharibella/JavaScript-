let userName = "John Doe"

let userAge = 30

userAge.toUpperCase()

console.log(userName)

for(let i=0; i<5; i++){
    console.log(i)
}

function calculateArea(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative")
    }
}

// let circle = {
//     radius : 5,
//     calculateArea:function (radius) {
//     if (this.radius < 0) {
//         throw new Error("Radius cannot be negative")
//     }
// }
// }
// calculateArea(
//     3
// )

// circle.calculateArea(
//     5
// )