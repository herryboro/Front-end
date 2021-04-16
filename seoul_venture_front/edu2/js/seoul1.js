/* 기본 문법
while (조건){
    반복해서 실행할 코드
}

for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
    반복해서 실행될 코드
}

*/

// while(true){
//   document.write('coding everybody <br />');
// }

var i = 0;
while (i < 10) {
  document.write("coding everybody <br />");
  i++;
}

for (var i = 0; i < 10; i++) {
  document.write("coding everybody" + i + "<br />");
}

var i = 0; // 초기화를 반복적으로 하는것을 피할 수 있다.

for (; i < 10; i++) {
  document.write("coding everybody" + i + "<br />");
}
