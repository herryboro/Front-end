var myObject = {
  name: 'herry',
  sayName: function () {
    console.log('My Name is ' + this.name);
  }
};

console.log(myObject);
myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();
