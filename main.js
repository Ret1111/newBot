document.getElementById('addBtn').addEventListener('click', () => {
    addCounter()
})
document.getElementById('minBtn').addEventListener('click', () => {
    minCounter()
})

let counter = document.getElementById('counter')
let count = 0

let addCounter = () => {
    count++
    
    counter.innerHTML = count
}
let minCounter = () => {
    count--
    
    if(count < 0) {
        count.innerHTML = 0
        count = 0
    } else {
        counter.innerHTML = count
    }
    
}


