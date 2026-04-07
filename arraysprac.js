let products = ["apple juice", "banana milkshake", "mango smoothie", "avocado salad"]
console.log(products)

// console.log(items[0])
// console.log(items[2])
// console.log(items.length)

// let lastIndex = items.length -1
// // console.log(items[lastIndex])

//items.push("berries")
//console.log(items)
 //items.unshift("pineapple") 
//console.log(items)
 //items.pop() //removes the last item from the array
 //console.log(items)
// items.shift("apple")
 //console.log

let items = ["apple", "banana", "mango", "avocado"];
console.log("Original:", items);

items.pop();    // removes last item
console.log("After pop:", items);

items.shift();  // removes first item
console.log("After shift:", items);
console.log(items.indexOf("apple"))
console.log(items.includes(`mango`))

items.reverse(1,0)
console.log(items)

let combined = items.concat(products)
console.log(combined)


