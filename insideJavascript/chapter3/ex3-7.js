let foo = {
  name: 'foo',
  major: 'computer science'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

// 객체 프로퍼티 갱신
foo.major = 'electronics enginnering';
console.log(foo.major);
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
console.log(foo.full-name);
console.log(foo.full);
console.log(name);

console.log(foo);