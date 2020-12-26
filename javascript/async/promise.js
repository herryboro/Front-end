'use strict';

/*
const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
  setTimeout(() => {
    resolve('herryboro');
  }, 2000);
}); 

promise.then((value) => console.log(value));
*/

/*
const promise = new Promise(
  function pro(resolve, reject) {
    console.log('doing something...');
    setTimeout(
      function set() {
      resolve('herryboro');
      reject(new Error('no network'));
      },
      2000
    );
  }
);

promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  }); 
*/
/*
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then(num => console.log(num)); 
*/


const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('닭'), 1000);
});
console.log(getHen);
getHen().then((value) => console.log(value));



