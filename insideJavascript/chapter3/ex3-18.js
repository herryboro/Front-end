// colorsArray 배열
let colorsArray = ['a', 'b', 'c'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

// colorObj 객체
let colorObj = {
  '0': 'a',
  '1': 'b',
  '2': 'c'
};

console.log(colorObj[0]);
console.log(colorObj[1]);
console.log(colorObj[2]);

// typeOf 연산자 비교
console.log(typeof colorsArray);
console.log(typeof colorObj);

// length 프로퍼티
console.log(colorsArray.length);
console.log(colorObj.length);

// 배열 표준 메서드
colorsArray.push('red');
// colorObj.push('red');

console.log(colorsArray);
console.log(colorObj);

