// 객체 리터럴 방식
var herry = {
  name: 'herry',
  age: 35,
  gender: 'male'
};
console.dir(herry);

// 생성자 함수
function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
console.dir(Person);

// Person 샘성자 함수를 이용해 객체 생성
var bar = new Person('bar', 33, 'woman');
var baz = new Person('baz', 26, 'man');
console.dir(bar);
console.dir(baz);

function A(arg) {
  if (!(this instanceof A)) return new A(arg);
  this.value = arg ? arg : 0;
}
var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
