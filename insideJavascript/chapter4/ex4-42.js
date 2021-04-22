function Person(name) {
  this.name = name;
}

console.dir(Person);

Person.prototype.getName = function () {
  return this.name;
};

var foo = new Person('herry');
console.log(foo);
console.log(foo.getName());
Person.prototype.name = 'Person';
console.log(Person.prototype.getName());
