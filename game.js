

/*
  create an object that represents the game instance
*/
function Game() {
  this.xSize = 7;
  this.ySize = 6;
  this.matrix = this.populateMatrix(this.xSize);
  this.isRed = true;
  this.isWinner = undefined;

}

Game.prototype.populateMatrix = function (x) {
  const matrix = []
  for (let i = 0; i < x; i++) {
    matrix.push([]);
  }
  return matrix;
}
/*
  would check if its possible to drop a piece in a col
    if possible 
      runs dropPiece function
      change active turn
      and check isWinner
*/
Game.prototype.playTurn = function (col) {
  console.log('type of col', typeof col)
  console.log('matrix', this.matrix);
  if (this.isWinner) return;
  if (this.matrix[col].length <= 6) {
    this.dropPiece(col);
    if (this.isWinner = this.checkWinner(col)) {
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
  if (this.verticalWin(col) ||
      this.horizontalWin(col) ||
      this.diagonalWinLowerLeftToUpperRight(col) ||
      this.diagonalWinUpperLeftToLowerRight(col) ) {
    return true;
  }
  return false;
}

Game.prototype.arrayWin = function(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === this.isRed) {
      count++;
      if (count === 4) {
        return true
      }
    } else {
      count = 0;
    }
  }
  return false;
}


Game.prototype.verticalWin = function (col) {
  col = this.matrix[col];
  if (col.length < 4) return false;
  const checkArray = col.slice(0, col.length -2)
  return this.arrayWin(col);
}


Game.prototype.horizontalWin = function (col) {
  const idx = this.matrix[col].length - 1;
  const checkArray = [];
  for (let i = 0; i < this.matrix.length; i++) {
    checkArray.push(this.matrix[i][idx]);
  }
  console.log('checkArray', checkArray);
  return this.arrayWin(checkArray);
}

//input col index, output: true if win or false if lose
// use helper arrayWin by passing it the diagonal array



Game.prototype.diagonalWinLowerLeftToUpperRight = function(col) {
  const idx = this.matrix[col].length - 1;
  let idx2 = idx;
  let col2 = col;
  const checkArray = [];
  while(idx2 >= 0 && col2 >= 0 && this.matrix[col2][idx2] !== undefined) {
    checkArray.push(this.matrix[col2][idx2]);
    idx2--;
    col2--;
  }
  idx2 = idx+1;
  col2 = col+1;
  while(idx2 < this.ySize && col2 < this.xSize && this.matrix[col2][idx2] !== undefined) {
    idx2++;
    col2++;
    checkArray.unshift(this.matrix[col2][idx2]);
  }
  return this.arrayWin(checkArray);
}

Game.prototype.diagonalWinUpperLeftToLowerRight = function(col) {
  const idx = this.matrix[col].length - 1;
  let idx2 = idx;
  let col2 = col;
  const checkArray = [];
  while(idx2 >= 0 && col2 < this.xSize && this.matrix[col2][idx2] !== undefined) {
    checkArray.push(this.matrix[col2][idx2]);
    idx2--;
    col2++;
  }
  idx2 = idx+1;
  col2 = col+1;
  while(idx2 < this.ySize && col2 >= 0 && this.matrix[col2][idx2] !== undefined) {
    idx2++;
    col2--;
    checkArray.unshift(this.matrix[col2][idx2]);
  }
  return this.arrayWin(checkArray);
}

/*
  checks to see if the piece isRed
*/
Game.prototype.dropPiece = function (col) {
  this.matrix[col].push(this.isRed);
  updateBoard(col);

}

Game.prototype.resetGame = function () {
  this.matrix = this.populateMatrix(this.xSize);
  this.isWinner = undefined; 
}


