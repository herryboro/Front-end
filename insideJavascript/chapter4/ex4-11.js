// 함수를 다른 함수의 리턴값으로 활용한 코드
let foo = function() {
  return function() {
    console.log('This function is the return value.');
  };
};

let bar = foo();
bar();