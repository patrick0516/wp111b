function vadd(a, b) {
  if (a.length !== b.length) {
    throw new Error("向量維度不一，無法相加。");
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }

  return result;
}

const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];

const sum = vadd(vector1, vector2);
console.log(sum);
