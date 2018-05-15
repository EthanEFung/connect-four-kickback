window.onload = function () {
  const $board = document.getElementById("board");

  for (let i = 0; i < 7; i++) {
    const $col = document.createElement('div');
    $col.setAttribute('class', 'col')
    $col.setAttribute('id', i);

    for (let j = 0; j < 6; j++) {
      const $slot = document.createElement('div');
      $slot.setAttribute('class', 'slot')
      $slot.setAttribute('id', '' + i + "_" + j);
      $col.appendChild($slot);
    }
    $board.appendChild($col);
  }
  addColumnClickHandlers()
}

function updateBoard(col) {

  const idx = game.matrix[col].length - 1;
  const $slot = document.getElementById('' + col + "_" + idx);
  if (game.isRed) {
    $slot.setAttribute('class', 'slot hotdog');
  } else {
    $slot.setAttribute('class', 'slot hamburger');
  }
}

function resetBoard() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      const $slot = document.getElementById("" + i + "_" + j);
      $slot.classList.remove('hotdog');
      $slot.classList.remove('hamburger')
    }
  }
  $scoreBoard = document.getElementsByClassName('score-board');
  if ($scoreBoard.length === 0) {
    console.log('does not have scoreboard')
    createScoreboard()
  }
}

function createScoreboard() {
  const $scoreBoard = document.createElement('div');
  $scoreBoard.setAttribute('class', 'score-board');
  const $yellowScore = document.createElement('div')
  $yellowScore.setAttribute('class', 'yellow-col');
  const $redScore = document.createElement('div')
  $redScore.setAttribute('class', 'red-col');

  $scoreBoard.appendChild($yellowScore);
  $scoreBoard.appendChild($redScore);

  document.body.appendChild($scoreBoard);
}

function declareWinner(isRed) {

  const $winner = document.createElement("div")
  const $winnerText = document.createElement("h1");
  $winnerText.innerHTML = 'Won';

  const $playAgain = document.createElement("button");
  $playAgain.innerText = "Play again?"
  $playAgain.setAttribute('class', 'play-again')

  $winner.appendChild($winnerText);
  $winner.appendChild($playAgain);

  $winner.setAttribute('class', 'winner')
  
  document.body.prepend($winner);
  addPlayAgainClickHandler()

}

function removePlayAgain() {
  const $winner = document.getElementsByClassName('winner')[0];
  $winner.parentNode.removeChild($winner);

}