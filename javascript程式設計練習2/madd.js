function madd(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error("矩陣維度不一，無法相加。");
  }

  const rows = a.length;
  const cols = a[0].length;

  const result = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    result.push(row);
  }

  return result;
}

const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];

const sumMatrix = madd(matrix1, matrix2);
console.log(sumMatrix);
