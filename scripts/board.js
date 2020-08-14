const boxes = document.querySelectorAll('[data-box]')
const X_CLASS = 'x'
const O_CLASS = 'o'
let O_TURN

boxes.forEach(box => {
  box.addEventListener('click', handleClick, { once: true })
})

export function handleClick (e) {
  const box = e.target
  const currentClass = O_TURN ? O_CLASS : X_CLASS
  placeMark(box, currentClass) 
}

export function placeMark(box, currentClass) {
  box.classList.add(currentClass)
}