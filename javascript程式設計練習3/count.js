function count(list) {
  const cmap = {};
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (cmap[word]) {
      cmap[word] += 1;
    } else {
      cmap[word] = 1;
    }
  }
  return cmap;
}

const list = ['a', 'dog', 'chase', 'a', 'cat'];
const cmap = count(list);
console.log(cmap);
