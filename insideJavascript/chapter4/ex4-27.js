// 내부 함수 this 바인딩
var value = 100;

var myObj = {
  value: 1,
  func1: function () {
    var that = this;
    this.value += 1;
    console.log('func1() called. this.value: ' + this.value);

    // 내부함수 func2()
    func2 = function () {
      that.value += 1;
      console.log('func2() called. this value: ' + that.value);

      // 내부함수 func()3
      func3 = function () {
        that.value += 1;
        console.log('func3() called. this value: ' + that.value);
      };
      func3();
    };
    func2();
  }
};

myObj.func1();
