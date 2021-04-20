function Person(name) {
  this.name = name;
}

var foo = new Person('herry');

// foo.sayHello();

Person.prototype.sayHello = function () {
  console.log('Hello');
};

console.dir(foo);
foo.sayHello();
