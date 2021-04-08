// 유사 배열 객체
let arr = ['bar'];
let obj = {
  name: 'foo',
  length: 1
};

arr.push('baz');
console.log(arr);
obj.push('baz');  // 배열이 아니므로 에러발생