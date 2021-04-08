let objA = {
  let: 40
};

let objB = objA;

console.log(objA.let);
console.log(objB.let);

objB.let = 50;
console.log(objA.let);
console.log(objB.let);