class Vector {
  constructor(array) {
    this.a = array;
  }

  neg() {
    let a = [];
    let i = 0;
    while (i < this.a.length) {
      a[i] = this.a[i] * -1;
      i++;
    }
    return new Vector(a);
  }

  add(p2) {
    let a = [];
    for (let i = 0; i < this.a.length; i++) {
      a[i] = this.a[i] + p2.a[i];
    }
    return new Vector(a);
  }

  length() {
    let r = 0;
    for (let v of this.a) {
      r += v * v;
    }
    return Math.sqrt(r);
  }

  sub(p2) {
    return this.add(p2.neg());
  }

  distance(p2) {
    return this.sub(p2).length();
  }

  toString() {
    return JSON.stringify(this.a);
  }

  static addMatrices(m1, m2) {
    if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
      throw new Error("矩陣维度不匹配，無法相加。");
    }

    const rows = m1.length;
    const cols = m1[0].length;

    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(m1[i][j] + m2[i][j]);
      }
      result.push(row);
    }

    return result;
  }

  static multiplyMatrices(m1, m2) {
    if (m1[0].length !== m2.length) {
      throw new Error("矩陣维度不匹配，無法相乘。");
    }

    const rows = m1.length;
    const cols = m2[0].length;
    const commonDim = m1[0].length;

    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let k = 0; k < commonDim; k++) {
          sum += m1[i][k] * m2[k][j];
        }
        row.push(sum);
      }
      result.push(row);
    }

    return result;
  }
}

const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
const matrix3 = [[2, 0], [0, 2]];

const resultAdd = Vector.addMatrices(matrix1, matrix2);
console.log("矩陣相加：", resultAdd);

const resultMultiply = Vector.multiplyMatrices(matrix1, matrix3);
console.log("矩陣相乘：", resultMultiply);
