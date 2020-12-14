'use strict'

class User {
  constructor(firtstName, lastName, age) {
    this.firtstName = firtstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

const user1 = new User('steve', 'jobs', 20);
console.log(user1.age); 

