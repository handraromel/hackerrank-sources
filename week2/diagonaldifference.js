function diagonalDifference(arr) {
  let firstDiagonal= 0, secondDiagonal = 0;
  for (let row = 0; row < arr.length; row++) {
    firstDiagonal += arr[row][row];
    secondDiagonal += arr[row][arr.length - row - 1]
  }
  return Math.abs(firstDiagonal - secondDiagonal)
}

diagonalDifference(3);
