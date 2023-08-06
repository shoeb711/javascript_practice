function myPromiseAll(promises) {
  let result = [];
  let completedPromise = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          result[index] = val;
          completedPromise++;

          if (completedPromise === promises.length) {
            resolve(result);
          }
        })

        .catch((err) => {
          reject(err);
        });
    });
  });
}

function task(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 3000) {
        reject('Promise rejected');
      }
      resolve(`promise resolved ${delay}`);
    }, delay);
  });
}

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise one resolve');
  }, 4000);
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Two resolve');
  }, 3000);
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Three reject');
  }, 2000);
});



const taskList = [promiseOne,promiseTwo,promiseThree];

myPromiseAll(taskList).then((val) => console.log(val)).catch((err) => console.log(err));

