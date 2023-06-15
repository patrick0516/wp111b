function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 3);
}

console.log(fibonacci(0));
console.log(fibonacci(1)); 
console.log(fibonacci(10)); 
