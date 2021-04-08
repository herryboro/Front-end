let a = 100;
let objA = {value: 100};

function changeArg(num, obj) {
  num = 200;
  obj.value = 200;    // 참조 값이 그대로 함수에 전달 obj.value를 200으로 변경하면 참조값이 가르키고 있는 객체의 value값이 변경된다.

  console.log(num);
  console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);