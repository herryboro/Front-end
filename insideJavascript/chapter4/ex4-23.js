let myObj = {
  name: 'herry',
  sayName: function () {
    console.log(this.name);
  }
};

let otherObj = {
  name: 'bar'
};

otherObj.sayName = myObj.sayName;
myObj.sayName();
otherObj.sayName();
