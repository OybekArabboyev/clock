const timeIcon = document.querySelector(".time-icon")
const moonIcon = document.querySelector(".moon-icon")
const body = document.body
let time = document.querySelector(".time")
const dayTime = document.querySelector(".day-time")
const amPm = document.querySelector(".am-pm")
function clock(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    time.innerHTML = `${hour}:${minute}`
    minute < 10 ? time.innerHTML = `${hour}:0${minute}` : time.textContent = `${hour}:${minute}`

    if (hour >= 7 && hour < 12) {
        dayTime.innerHTML = "GOOD MORNING, IT’S CURRENTLY"
        document.body.style.backgroundImage = `url('../images/morning.jpg')`
        timeIcon.style.display = "block"
        moonIcon.style.display = "none"
    } else if (hour >= 12 && hour < 17 ) {
        dayTime.innerHTML = "GOOD AFTERNOON, IT’S CURRENTLY"
        document.body.style.backgroundImage = `url('../images/day-two.jpg')`
        timeIcon.style.display = "block"
        moonIcon.style.display = "none"
    } else if (hour >= 17 && hour < 20) {
        dayTime.innerHTML = "GOOD EVENING, IT’S CURRENTLY"
        document.body.style.backgroundImage = `url('../images/evening.jpg')`
        timeIcon.style.display = "none"
        moonIcon.style.display = "block"
    } else if (hour >= 21 && hour < 3) {
        dayTime.innerHTML = "GOOD NIGHT, IT’S CURRENTLY"
        document.body.style.backgroundImage = `url('../images/night.jpg')`
        timeIcon.style.display = "none"
        moonIcon.style.display = "block"
    } else if (hour >= 4 && hour < 7) {
        dayTime.innerHTML = "GOOD MORNING, IT’S CURRENTLY"
        document.body.style.backgroundImage = `url('../images/sunrice.jpg')`
        timeIcon.style.display = "block"
        moonIcon.style.display = "none"
    } else {
        dayTime.innerHTML = "GOOD NIGHT, IT’S CURRENTLY"
        document.body.style.backgroundImage = `url('../images/night.jpg')`
        timeIcon.style.display = "none"
        moonIcon.style.display = "block"
    }
}
setInterval(clock, 1000)
