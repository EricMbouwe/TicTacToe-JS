import { render as renderBoard, setBoardHoverClass, boxes, handleClick, X_CLASS, O_CLASS } from './board.js';
import { winningMessage, WINNING_MESSAGE_TEXT, checkPlayersNames } from './game.js';

const restartButton = document.getElementById('restartBtn')
const startButton = document.getElementById('startBtn')
const startPage = document.getElementById('startPage')
const exitButton = document.getElementById('exitBtn')
const inputs = document.querySelectorAll('input')

export function start () {
  if(checkPlayersNames()){
    startPage.classList.add('d-none')
    renderBoard()
    setBoardHoverClass()
  }
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
  document.getElementById('player1').classList.remove('error')
  document.getElementById('player2').classList.remove('error')
  document.getElementById('player1').value = ''
  document.getElementById('player2').value = ''
  startPage.classList.toggle('d-none')
}

inputs.forEach(input => {
  input.onkeyup = function () {
    input.classList.remove('error')
  }
})

startButton.addEventListener('click', start)
restartButton.addEventListener('click', restart)
exitButton.addEventListener('click', exit)