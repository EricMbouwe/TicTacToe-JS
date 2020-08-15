import { boxes, X_CLASS, O_CLASS } from './board.js'
import { setPlayerNames as playersNames } from "./player.js";

export let O_TURN
export const WINNING_MESSAGE_TEXT = document.querySelector('[data-winning-text]')
export const winningMessage = document.getElementById('winningMessage')

const WINNING_ARRAY = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]


export function swicthTurns() {
  O_TURN = !O_TURN
}

function winner(currentClass) {
  return WINNING_ARRAY.some(combination => {
    return combination.every(index => {
      return boxes[index].classList.contains(currentClass)
    })
  })
}

function isDraw() {
  return [...boxes].every(box => {
    return box.classList.contains(X_CLASS) || box.classList.contains(O_CLASS)
  })
}

export function checkWinner(currentClass) {
  if (winner(currentClass)) {
    endGame(false)
  } 
  else if (isDraw()) {
    endGame(true)
  }
  else {
    swicthTurns()
  }
}

function endGame(draw) {
  const names = playersNames()
  if(draw) {
    WINNING_MESSAGE_TEXT.innerHTML = 'Draw!'
  }
  else {
    WINNING_MESSAGE_TEXT.innerHTML = `${O_TURN ? names[1] : names[0]} Wins!`
  }
  winningMessage.classList.add('show')
}

export function checkPlayersNames () {
  const names = playersNames()
  if(names[0] === '') {
    document.getElementById('player1').classList.add('error')
    return false
  }
  else if (names[1] === '') {
    document.getElementById('player2').classList.add('error')
    return false
  }
  return true
}