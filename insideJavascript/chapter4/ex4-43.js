function Person(name) {
  this.name = name;
}
console.dir(Person);
console.log(Person.prototype.constructor);

// foo 객체 생성
var foo = new Person('herry');

console.log(foo.country);

// 디폴트 프로토타입
Person.prototype = {
  country: 'korea'
};

console.log(Person.prototype.constructor);

// bar 객체
var bar = new Person('bar');

console.log(foo.country); // 5
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);
