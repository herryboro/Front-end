let factorialVar = function factorial(n) {
  if(n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorialVar(2));
console.log(factorial(4));