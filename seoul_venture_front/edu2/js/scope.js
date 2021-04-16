var vscope = "global"; // 함수 호이스팅

function fscope() {
  console.log(vscope);
}
fscope(); // => global

var vscope = "global";

function fscope() {
  var vscope = "local";
  console.log("함수안 " + vscope); // => local
}
fscope();
console.log("함수밖 " + vscope); // => global
