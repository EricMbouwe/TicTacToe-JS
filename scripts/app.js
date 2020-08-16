import { render as renderBoard, setBoardHoverClass, boxes, handleClick, X_CLASS, O_CLASS } from './board.js';
import { winningMessage, WINNING_MESSAGE_TEXT, checkPlayersNames } from './game.js';
import { playerOne, playerTwo } from "./player.js";

const restartButton = document.getElementById('restartBtn')
const startButton = document.getElementById('startBtn')
const startPage = document.getElementById('startPage')
const exitButton = document.getElementById('exitBtn')
const inputs = document.querySelectorAll('input')

function start () {
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
  playerOne.classList.remove('error')
  playerTwo.classList.remove('error')
  playerOne.value = ''
  playerTwo.value = ''
  startPage.classList.toggle('d-none')
}

(function inputRemoveErrorClass () {
  inputs.forEach(input => {
    input.onkeyup = function () {
      input.classList.remove('error')
    }
  })
})()

startButton.addEventListener('click', start)
restartButton.addEventListener('click', restart)
exitButton.addEventListener('click', exit)