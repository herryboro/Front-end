let foo = {
  name: 'foo',
  age: 30
};

console.log(foo.toString());    // foo 객체에는 toString()라는 메서드가 없지만 foo의 (부모)프로토타입에 toString()이 정의되어 있어서 foo 객체가 상속처럼 toString() 메서드를 호출
console.log(foo);