
let numbers = [];

for (let i = 1; i <= 100000; i++) {
    numbers.push(i);
}
console.log(numbers)


console.time("For Loop");

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}

console.timeEnd("For Loop");
console.log("For Loop Sum:", sum1);



console.time("Reduce");

let sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.timeEnd("Reduce");
console.log("Reduce Sum:", sum2);