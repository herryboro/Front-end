let objA = {
  let: 100
};

let objB = objA;

console.log(objA.let);
console.log(objB.let);

objB.let = 200;
console.log(objA.let);
console.log(objB.let);