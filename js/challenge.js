let counter = document.getElementById('counter')
let seconds = 0

function timerSet() {
  seconds++
  counter.textContent = seconds
}

let startTimer = 0
startTimer = setInterval(timerSet, 1000)

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
let flagPaused = 'resumed'

startTimer
plus.addEventListener('click', () => {
  seconds++
  counter.innerText = seconds
})

minus.addEventListener('click', () => {
  seconds--
  counter.innerText = seconds
})

pause.addEventListener('click', () => {
  if (flagPaused == 'resumed') {
    clearTimeout(startTimer)
    plus.disabled = true
    minus.disabled = true
    heart.disabled = true
    pause.textContent = 'resume'
    flagPaused = 'paused'

  } else if (flagPaused == 'paused') {
    pause.textContent = 'pause'
    flagPaused = 'resumed'
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    startTimer = setInterval(timerSet, 1000)
  }
})
