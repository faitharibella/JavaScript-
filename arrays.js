let items = ["nails","cement", "bricks","timber","iron sheets", "vanish", "paint"]

 console.log(items)

  console.log(items.length)

//  console.log(items[0])

let lastIndex = items.length -1
// console.log(items[lastIndex], lastIndex)

// items[0] = items[0] .toUpperCase()
// console.log(items)

// console.log(items.lastIndexOf("nails"))


items.push("rubber sealing","filler")

// console.log(items)

items.unshift("sandpaper")

// console.log(items)

items.pop //removes at the end
items.shift //removes at the beginning

items.shift("nails")


items.splice(1,2, "glue", "tape")
//  console.log(items)

let userInput = "nails"
let searchIndex = items. indexOf(userInput)
console.log(items)
if(searchIndex !== -1){
    console.log(`The index of ${userInput}, is ${searchIndex}`)
}else{
    console.log(`${userInput} was not found in the search`)
}

// console.log(items.includes(userInput))
