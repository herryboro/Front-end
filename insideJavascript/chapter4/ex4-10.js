// 함수 표현식으로 foo() 함수 생성
let foo = function (func) {
  func();
};

// foo 함수 실행
foo(function () {
  console.log("Function can be used as the argument.");
});
