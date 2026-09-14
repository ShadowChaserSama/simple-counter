let counter = document.getElementById('counter')

let btn_inc = document.getElementById('btn-inc')
let btn_dcr = document.getElementById('btn-dcr')
let btn_reset = document.getElementById('btn-reset')
let btn_mode = document.getElementById('btn-mode')

// button events
btn_inc.addEventListener('click', () => {
  counter.innerText = Number(counter.innerText) + 1
})

btn_dcr.addEventListener('click', () => {
  if (Number(counter.innerText) > 0){
  counter.innerText = Number(counter.innerText) - 1
  }
})

btn_reset.addEventListener('click', () => {
  counter.innerText = '0'
})

//Dark Mode
mode = false
btn_mode.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  btn_mode.classList.toggle('white-border')

  if (mode) {
    btn_mode.innerHTML = '<i class="fa-jelly-fill fa-regular fa-sun">'
    btn_mode.style.color = 'yellow'
    mode = false
  } else {
    btn_mode.innerHTML = '<i class="fa-jelly-fill fa-regular fa-moon">'
    btn_mode.style.color = 'purple'
    mode = true
  }
})
