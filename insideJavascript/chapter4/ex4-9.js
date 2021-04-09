// 변수에 할당
let foo = 100;
let bar = function() {return 100;};
console.log(bar());

// 프로퍼티에 함수 할당
let obj = {};
obj.baz = function() {return 200;}
console.log(obj.baz());
console.log(obj);