import { placeMark } from './player.js';
import { O_TURN, checkWinner } from './game.js'
import { cpuMove } from './cpu.js';

export const X_CLASS = 'x'
export const O_CLASS = 'o'
export const boxes = document.querySelectorAll('[data-box]')
const board = document.getElementById('board')

export function render () {
  boxes.forEach(box => {
    box.addEventListener('click', handleClick, { once: true })
  })
}

export function handleClick (e) {
  const box = e.target
  const currentClass = O_TURN ? O_CLASS : X_CLASS
  placeMark(box, currentClass)
  checkWinner(currentClass)
  cpuMove(box,currentClass)
  setBoardHoverClass()
}

export function setBoardHoverClass () {
  board.classList.remove(X_CLASS)
  board.classList.remove(O_CLASS)
  if(O_TURN) {
    board.classList.add(O_CLASS)
  }else {
    board.classList.add(X_CLASS)
  }
}
