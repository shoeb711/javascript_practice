function promiseAll(promises) {
    if (!!promises.length) {        
        new Promise((resolve) => {
            resolve([]);
        });
    }

    let result = [];
    let successPromise = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then((val) => {
                    result[index] = val;
                    successPromise++;

                    if (successPromise === promises.length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise one resolve");
    }, 4000);
});
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two resolve");
    }, 3000);
});
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Three reject");
    }, 2000);
});

const taskList = [promiseOne, promiseThree, promiseTwo];
// const taskList = [];

promiseAll(taskList)
    .then((val) => console.log(val))
    .catch((err) => console.log(err));
