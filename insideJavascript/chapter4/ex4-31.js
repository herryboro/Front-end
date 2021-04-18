function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var herry = {};

Person.apply(herry, ['herry', 33, 'man']);
console.dir(herry);
