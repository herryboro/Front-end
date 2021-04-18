function parent() {
  let a = 100;

  // child() 내부 함수
  let child = function () {
    console.log(a);
  };

  // child() 함수 반환
  console.log(child);
  return child;
}

let inner = parent();
inner();
