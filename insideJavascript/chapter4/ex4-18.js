// parent() 함수
function parent() {
  let a = 100;
  let b = 200;

  // child() 내부 함수 정의
  function child() {
    let b = 300;
    console.log(a);
    console.log(b);
  }

  child();
}

parent();
child();