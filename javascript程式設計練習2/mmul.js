function mmul(a, b) {
  if (a[0].length !== b.length) {
    throw new Error("矩阵维度不匹配，无法相乘。");
  }

  const rows = a.length;
  const cols = b[0].length;
  const commonDim = a[0].length;

  const result = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let k = 0; k < commonDim; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];

const productMatrix = mmul(matrix1, matrix2);
console.log(productMatrix);
