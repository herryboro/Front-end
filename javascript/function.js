'use strict'

function calculate(command, a, b) {
  if(command === 'add') {
    return a + b;
  } else if(command === 'substract') {
    return a - b;
  } else if(command === 'divide') {
    return a / b;
  } else if(command === 'multiply') {
    return a * b;
  } else if(command === 'remainder') {
    return a % b;
  }
}

console.log(calculate('add', 5, 4)); 