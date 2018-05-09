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

function declareWinner(isRed) {

  const $winner = document.createElement("h1");
  $winner.setAttribute('class', 'winner')
  $winner.innerHTML = 'Won'
  document.body.prepend($winner);

}