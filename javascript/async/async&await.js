'use strict'

// // 1. async
// async function fetchUser() {
//   return 'ellie'
// }

// const user = fetchUser();
// // fetchUser().then(console.log());
// user.then(console.log);
// console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  });
}

 function getApple() {
   delay(2000);
  return '🍎';
}


async function getBanana() {
  await delay(2000);
  return '🍌';
}

async function pickFruit() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`
}

pickFruit().then(console.log);