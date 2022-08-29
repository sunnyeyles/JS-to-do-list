// create container and add container class
const container = document.createElement("div")
container.classList = ".container"
container.style.width = "80%"
container.style.margin = "auto"

// append container to body
document.body.append(container)

// create header
const header = document.createElement("h1")
header.innerText = "To Do List"
header.style.textAlign = "center"
header.style.fontStyle = "italic"
header.style.fontFamily = "monospace"

// create form
const form = document.createElement("form")
form.style.border = "solid 2px"
form.style.backgroundImage = "linear-gradient(blue, pink)"

// create list
const uList = document.createElement("ul")

// append header, form and ul to container
container.append(header, form, uList)

// create input and buttons
// input
const input = document.createElement("input")
input.type = "input"
input.style.backgroundColor = "pink"


// submit btn
const submitBtn = document.createElement("input")
submitBtn.type = "submit"
submitBtn.innerText = "Add Item"

// clear btn
const clearBtn = document.createElement("button")
clearBtn.type = "button"
clearBtn.innerText = "Clear To dos"

// append input and buttons to form
form.append(input, submitBtn, clearBtn)

// when form is submitted, add input to list
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newListItem = document.createElement("li")
    newListItem.style.listStyleType = "none"
    newListItem.innerText = input.value
    uList.append(newListItem)
    input.value = ""
})

// clear list when clearBtn is clicked
clearBtn.addEventListener("click", (e) => {
    e.preventDefault()
    uList.innerText = ""
})










