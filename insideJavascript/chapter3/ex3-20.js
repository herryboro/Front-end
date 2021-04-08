let arr = ['zero', 'one', 'two'];
console.log(arr.length);

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    // 배열에 동적 프로퍼티를 추가할 경우 length 의 증가가 없다.

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);

// 배열 객체 출력
console.dir(arr);
console.log(arr["color"]);
console.log(arr['name']);