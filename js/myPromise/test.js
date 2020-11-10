
const myPromise = require('./myPromise');

const promise = new myPromise((resolve, reject) => {
    console.log(2);
    resolve(2);
})
.then(result => {
    console.log(3, result);
})

console.log(1);

// promise.then(result => {
//     console.log(result);
// },
// err => {
//     console.log(err);
// });