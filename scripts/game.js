import { boxes } from './board.js'

export let O_TURN
export const WINNING_ARRAY = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

export function swicthTurns() {
  O_TURN = !O_TURN
}

export function checkWin(currentClass) {
  return WINNING_ARRAY.some(combination => {
    return combination.every(index => {
      boxes[index].classList.contains(currentClass)
    })
  })
}

export function setWinner(currentClass) {
  
}