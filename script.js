
let count = 0

let countEl = document.getElementById("count-el")

function increment() {
    // count = count + 1
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")

let welcomeGreetings = "Hey there! Let's get counting! "
welcomeEl.textContent = welcomeGreetings


let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
    console.log(count)
}