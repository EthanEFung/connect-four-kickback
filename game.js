

/*
  create an object that represents the game instance
*/
function Game() {
  this.matrix = [[], [], [], [], [], [], []];
  this.isRed = true;
  this.winner = undefined;
}

/*
  would check if its possible to drop a piece in a col
    if possible 
      runs dropPiece function
      change active turn
      and check winner
*/
Game.prototype.playTurn = function (col) {
  if (this.winner) return;
  if (this.matrix[col].length <= 6) {
    this.dropPiece(col);
    if (this.winner = this.checkWinner(col)) {
      declareWinner(this.isRed) 
    }
    this.isRed = !this.isRed;
  }
}

/*
  col -> index in the matrix

  check if verticalWin
  check if horizontalWin
  check if diagWinPart1
  check if diagWinPart2

  TODO
*/
Game.prototype.checkWinner = function (col) {
  if (this.verticalWin(col) || this.horizontalWin(col)) return true;
  return false;
}

Game.prototype.verticalWin = function (col) {
  col = this.matrix[col];

  if (col.length < 4) return false;

  for (let i = col.length - 2; i >= 0; i--) {
    if (col[i] !== this.isRed) return false;
  }

  return true;
}

/*
  check the length of the col
    get the index of the last item

  have a count of how many in a row init at zero  
  loop the matrix
    check at the index we saved
    if the piece at the index matches isRed increment counter
      if the count is at four return true
    else reset counter 
  
*/
Game.prototype.horizontalWin = function (col) {
  const idx = this.matrix[col].length - 1;

  let count = 0;
  for (let i = 0; i < this.matrix.length; i++) {
    if (this.matrix[i][idx] === this.isRed) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }
  return false;
}



/*
  checks to see if the piece isRed
*/
Game.prototype.dropPiece = function (col) {
  this.matrix[col].push(this.isRed);
  updateBoard(col);

}

Game.prototype.resetGame = function () { }


