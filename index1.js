let heading = document.getElementById("heading")

console.log(heading)

heading.style.color = "blue";

console.log(heading.style.color)

console.log(heading.innerText)

// heading.innerText = "   DOM Manipulation"


usernameInput = document.getElementById("username")

let passwordInput = document.getElementById("password") 

let usernameInputField = document.querySelector("#username")
let passwordInputField = document.querySelector("#password")

usernameInputField.value = "faith"

passwordInputField.value = "123456"

usernameInputField.addEventListener("blur"()=>{
    let username = usernameInputField.value

    usernameInputField.value = username.trim().toLowerCase()
})


console.log(usernameInput)














heading.textContent = "<script src='https://example.com/script.js'></script>"

let elements = document.getElementsByTagName("button")

console.log(elements)

elements[1].innerText= elements[1].innerText.toUpperCase()

let submitBtn = document.querySelector(".btn")

console.log(submitBtn)

submitBtn.style.backgroundColor = "lightpink"

console.log(submitBtn.style.backgroundColor)

let listElems = document.querySelectorAll("li")

console.log("list items:", listElems[0].innerText)
console.log("list items:", listElems[1].innerText)
console.log("list items:", listElems[2].innerText)


/**
 * Web Storage
 */


// localStorage.setItem("app_name", "JavaScript")

const APP_NAME = localStorage.getItem("app_name")
// heading.innerText = APP_NAME    



let records= [
    {name: "John Doe", age: 30},
    {name: "Jane Smith", age: 25},
    {name: "Bob Williams", age: 22}
]

let jsonData = JSON.stringify(records)

localStorage.setItem("records", jsonData)

