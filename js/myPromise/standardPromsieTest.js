
const promise = new Promise((resolve, reject) => {
    resolve(2);
});

promise.then(result => {
    console.log(result);
},
err => {
    console.log(err);
});