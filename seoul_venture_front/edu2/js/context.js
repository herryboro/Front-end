/*function func() {
  if (window === this) {
    document.write("window === this");
  }
}
func();*/

/*
  func.call();
  func.apply();
  func.bin();
*/

var obja = {
  name: "obja",
};

var objb = {
  name: "objb",
};

function Foo() {
  this.name = "foo";
  this.getName = function (x, y) {
    console.log("Foo getName:" + this.name + " x:" + x + " y:" + y);
  };
}

var foo = new Foo();
console.log(foo);

foo.getName(10, 20); // => Foo getName:foo x:10 y:20
foo.getName.call(obja, 30, 40); // => Foo getName:obja x:30 y:40
foo.getName.apply(objb, [50, 60]);

var foo2 = foo.getName.bind(objb, 10, 20);
foo2();
