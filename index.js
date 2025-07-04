let homePoint = 0
let guestPoint = 0

let homeEl = document.getElementById('home-point')
let guestEl = document.getElementById('guest-point')

function add1Home() {
    homePoint += 1
    homeEl.textContent = homePoint
}

function add2Home() {
    homePoint += 2
    homeEl.textContent = homePoint
}

function add3Home() {
    homePoint += 3
    homeEl.textContent = homePoint
}

function add1Guest() {
    guestPoint += 1
    guestEl.textContent = guestPoint
}

function add2Guest() {
    guestPoint += 2
    guestEl.textContent = guestPoint
}

function add3Guest() {
    guestPoint += 3
    guestEl.textContent = guestPoint
}

function newGame() {
    homePoint = 0
    guestPoint = 0
    homeEl.textContent = homePoint
    guestEl.textContent = guestPoint
}
