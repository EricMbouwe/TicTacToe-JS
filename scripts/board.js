import { placeMark } from './player.js';
import { swicthTurns, O_TURN } from './game.js'

const X_CLASS = 'x'
const O_CLASS = 'o'
const boxes = document.querySelectorAll('[data-box]')

boxes.forEach(box => {
  box.addEventListener('click', handleClick, { once: true })
})

export function handleClick (e) {
  const box = e.target
  const currentClass = O_TURN ? O_CLASS : X_CLASS
  placeMark(box, currentClass)
  swicthTurns()
  setBoardHoverlass()
}

export function setBoardHoverlass () {
  
}
