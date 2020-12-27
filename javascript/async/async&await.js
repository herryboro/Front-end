'use strict'

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('ellie');
  });
}

const user = fetchUser();
user.then(console.log);

// 2. await
