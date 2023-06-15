function truthTable(n) {
  const combinations = [];
  const totalCombinations = Math.pow(2, n);

  for (let i = 0; i < totalCombinations; i++) {
    const binaryString = i.toString(2).padStart(n, '0');
    const combination = binaryString.split('').map(Number);
    combinations.push(combination);
  }

  return combinations;
}

const n = 5; 
const table = truthTable(n);

table.forEach(combination => {
  console.log(combination.join(', '));
});
