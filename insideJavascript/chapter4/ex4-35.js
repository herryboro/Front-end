function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  return { name: 'herry', age: 20, gender: 'man' };
}

var obj = new Person('foo', 33, 'woman');
console.dir(obj);
