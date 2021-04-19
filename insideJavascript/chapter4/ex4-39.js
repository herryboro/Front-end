function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

var obj = new Person('herry', 33, 'coding');

console.log(obj.hasOwnProperty('name'));
console.dir(Person.prototype);
