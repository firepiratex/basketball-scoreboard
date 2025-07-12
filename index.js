let homePoint = JSON.parse(localStorage.getItem("home"))
let guestPoint = JSON.parse(localStorage.getItem("guest"))

let homeEl = document.getElementById('home-point')
let guestEl = document.getElementById('guest-point')

if (homePoint === null) {
    homeEl.textContent = 0
} else {
    homeEl.textContent = homePoint
}

if (guestPoint === null) {
    guestEl.textContent = 0
} else {
    guestEl.textContent = guestPoint
}

function storeLocalStorage(club, points) {
    if (club === "home") {
        let points = Number(homePoint)
    } else {
        let points = Number(guestPoint)
    }
    localStorage.setItem(club, JSON.stringify(points))
}

function add1Home() {
    homePoint = JSON.parse(localStorage.getItem("home"))
    homePoint += 1
    homeEl.textContent = homePoint
    storeLocalStorage("home", homePoint)
}

function add2Home() {
    homePoint = JSON.parse(localStorage.getItem("home"))
    homePoint += 2
    homeEl.textContent = homePoint
    storeLocalStorage("home", homePoint)
}

function add3Home() {
    homePoint = JSON.parse(localStorage.getItem("home"))
    homePoint += 3
    homeEl.textContent = homePoint
    storeLocalStorage("home", homePoint)
}

function add1Guest() {
    guestPoint = JSON.parse(localStorage.getItem("guest"))
    guestPoint += 1
    guestEl.textContent = guestPoint
    storeLocalStorage("guest", guestPoint)
}

function add2Guest() {
    guestPoint = JSON.parse(localStorage.getItem("guest"))
    guestPoint += 2
    guestEl.textContent = guestPoint
    storeLocalStorage("guest", guestPoint)
}

function add3Guest() {
    guestPoint = JSON.parse(localStorage.getItem("guest"))
    guestPoint += 3
    guestEl.textContent = guestPoint
    storeLocalStorage("guest", guestPoint)
}

function newGame() {
    storeLocalStorage("home", 0)
    storeLocalStorage("guest", 0)
    homeEl.textContent = 0
    guestEl.textContent = 0
}
