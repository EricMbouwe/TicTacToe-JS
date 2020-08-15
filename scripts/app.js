import { render, setBoardHoverlass, boxes, handleClick, X_CLASS, O_CLASS } from './board.js';
import { winningMessage, WINNING_MESSAGE_TEXT } from './game.js';

const restartButton = document.getElementById('restartBtn')

function start () {
  render()
  setBoardHoverlass()
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

start()
restartButton.addEventListener('click', restart)