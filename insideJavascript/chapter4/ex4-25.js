var test = 'This is test';
console.log(window.test);

var sayHerry = function () {
  console.log(this.test);
};

sayHerry();
