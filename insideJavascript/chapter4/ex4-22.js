function add(a, b) {
  // argument 객체 출력
  console.dir(arguments);
  return a + b;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

//arguments 객체의 사용 예
function sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
