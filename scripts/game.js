import { boxes, X_CLASS, O_CLASS } from './board.js'

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

export function winner(currentClass) {
  return WINNING_ARRAY.some(combination => {
    return combination.every(index => {
      boxes[index].classList.contains(currentClass)
    })
  })
}

export function isDraw() {
  return [...boxes].every(box => {
    return box.classList.contains(X_CLASS) || box.classList.contains(O_CLASS)
  })
}

export function checkWinner(currentClass) {
  if (winner(currentClass)) {
    WINNING_MESSAGE_TEXT.innerHTML = `${O_TURN ? "O's" : "X's"} Wins!`
    winningMessage.classList.add('show')
  } 
  else if (isDraw()) {
    WINNING_MESSAGE_TEXT.innerHTML = 'Draw!'
    winningMessage.classList.add('show')
  }
  else {
    swicthTurns()
  }
  console.log(currentClass)
  console.log(WINNING_MESSAGE_TEXT.innerHTML)
  console.log(winner(currentClass))
}

// export function endGame(isDraw) {
//   if(isDraw) {
//     WINNING_MESSAGE_TEXT.innerHTML = 'Draw!'
//   }
//   else {
//     WINNING_MESSAGE_TEXT.innerHTML = `${O_TURN ? "O's" : "X's"} Wins!`
//   }
//   winningMessage.classList.add('show')
// }