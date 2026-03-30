let nameInput = prompt("adin nedir: ")

let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")

myName.innerHTML = nameInput

function setTime() {
    return {
        day: new Date().getDay(),
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        second: new Date().getSeconds()
    }
}

setInterval(() => {
    let { second, min, hour, day } = setTime()
    let days = ["pazar", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi"]
    myClock.innerHTML = `${hour}:${min}:${second} ${days[day]}`
}, 1);
