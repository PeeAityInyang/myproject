let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    console.log( count )
    countEl.textContent = count
}

function save() {
let savecom = count + "-"




saveEl.textContent  += savecom

countEl.textContent = 0
count = 0
}
