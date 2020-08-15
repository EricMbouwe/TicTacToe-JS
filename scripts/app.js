import { render as renderBoard, setBoardHoverClass, boxes, handleClick, X_CLASS, O_CLASS } from './board.js';
import { winningMessage, WINNING_MESSAGE_TEXT } from './game.js';

const restartButton = document.getElementById('restartBtn')
const startButton = document.getElementById('startBtn')
const startPage = document.getElementById('startPage')
const exitButton = document.getElementById('exitBtn')

function start () {
  startPage.classList.add('d-none')
  renderBoard()
  setBoardHoverClass()
}

function restart () {
  winningMessage.classList.remove('show')
  boxes.forEach(box => {
    box.classList.remove(X_CLASS)
    box.classList.remove(O_CLASS)
    WINNING_MESSAGE_TEXT.innerHTML = ''
    box.removeEventListener('click', handleClick)
  })
  start()
}

function exit () {
  winningMessage.classList.remove('show')
  boxes.forEach(box => {
    box.classList.remove(X_CLASS)
    box.classList.remove(O_CLASS)
    WINNING_MESSAGE_TEXT.innerHTML = ''
    box.removeEventListener('click', handleClick)
  })
  startPage.classList.toggle('d-none')
}

startButton.addEventListener('click', start)
restartButton.addEventListener('click', restart)
exitButton.addEventListener('click', exit)