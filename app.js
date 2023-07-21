function sum(matrix) {
  // Get the size of the square matrix (n x n)
  const n = matrix.length;

  // Initialize variables to store the sum of the main and secondary diagonals
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  // Calculate the sum of the main diagonal and secondary diagonal
  for (let i = 0; i < n; i++) {
    mainDiagonalSum += matrix[i][i]; // The main diagonal elements have the same row and column index (i, i)
    secondaryDiagonalSum += matrix[i][n - i - 1]; // The secondary diagonal elements have row index i and column index (n - i - 1)
  }

  // Return the sum of both diagonals
  return mainDiagonalSum + secondaryDiagonalSum;
}