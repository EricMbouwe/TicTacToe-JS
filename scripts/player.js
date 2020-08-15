const playerOne = document.getElementById('player1')
const playerTwo = document.getElementById('player2')

export function placeMark(box, currentClass) {
  box.classList.add(currentClass)
}

export function setPlayerNames () {
  let players = []
  const playerOneName = playerOne.value
  const playerTwoName = playerTwo.value
  players.push(playerOneName)
  players.push(playerTwoName)
  return players
}
