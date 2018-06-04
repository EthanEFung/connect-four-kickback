const game = new Game();
console.log(0)

function addColumnClickHandlers() {
  const $columns = document.getElementsByClassName('col');
  for (let $col of $columns) {
    $col.addEventListener('click', function (e) {
      e.preventDefault();
      //console.log('hello', e.target.id)
      const id = e.target.id;
      const col = parseInt(id.split("_")[0], 10);
      game.playTurn(col);
      
    });
  }
}

function addPlayAgainClickHandler() {
  let $playAgain = document.getElementsByClassName('play-again');
  $playAgain = $playAgain[0];
  $playAgain.addEventListener('click', function(e){
    e.preventDefault();
    game.resetGame();
    resetBoard();
    removePlayAgain();
  })
}
