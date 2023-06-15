function vdot(a, b) {
  if (a.length !== b.length) {
    throw new Error("向量維度不一，無法計算內積。");
  }

  let dotProduct = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
  }

  return dotProduct;
}

const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];

const dotProduct = vdot(vector1, vector2);
console.log(dotProduct); 
