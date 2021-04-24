function Person(name) {
  this.name = name;
}

Person.prototype.country = 'korea';

var foo = new Person('foo');
var bar = new Person('bar');

console.log(foo.country);
console.log(bar.country);

foo.country = 'Japan';
console.log(foo.country);
console.log(bar.country);
