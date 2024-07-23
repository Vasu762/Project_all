const timeDisplay = document.querySelector("#timeDisplay")
const StartBtn = document.querySelector("#StartBtn")
const PauseBtn = document.querySelector("#PauseBtn")
const resetBtn = document.querySelector("#resetBtn")


let starttime = 0;
let elapsedTime = 0
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let minite = 0;
let second = 0
  

StartBtn.addEventListener("click", () => {
  if (paused) {
    paused = false
    starttime = Date.now() - elapsedTime
    intervalId = setInterval(updateTime, 1000)
  }
})
PauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true
    elapsedTime = Date.now() - starttime
    clearInterval(intervalId)
  }

})
resetBtn.addEventListener("click", () => {
  paused = true
  clearInterval(intervalId)
  starttime = 0;
  elapsedTime = 0
  currentTime = 0;
  hrs = 0;
  minite = 0;
  second = 0
  timeDisplay.textContent ="00:00:00"

})

function updateTime() {
  elapsedTime = Date.now() - starttime

  second = Math.floor((elapsedTime / 1000) % 60)
  minite = Math.floor((elapsedTime / (1000 * 60)) % 60)
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

  timeDisplay.textContent = `${hrs} :${minite} : ${second}`

  second = pad(second)
  minite = pad(minite)
  hrs = pad(hrs)
  function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit
  }
}

