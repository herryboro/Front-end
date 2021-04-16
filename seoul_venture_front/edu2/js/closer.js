/*function outter() {
  function inner() {
    var title = "coding everybody";
    alert(title);
  }
  inner();
}
outter();*/
var title = "hello";

function outter() {
  var title = "coding everybody";
  function inner() {
    console.log(title);
  }
  inner();
}
outter();

// 클로저를 잘못 사용하는 예시
var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}
for (var index in arr) {
  console.log(arr[index]());
}

var arr2 = [];

for (var j = 0; j < 5; j++) {
  arr2[j] = (function (id) {
    return function () {
      return id;
    };
  })(j);
}

for (var index in arr2) {
  console.log(arr2[index]());
}

/*function factory_movie(title) {
  return {
    get_title: function () {
      return title;
    },
    set_title: function (_title) {
      title = _title;
    },
  };
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title("공각기동대");

alert(ghost.get_title());
alert(matrix.get_title());*/
