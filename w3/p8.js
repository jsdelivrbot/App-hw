let promise = new Promise(
    (resolve,reject) =>{
        resolve();
});

promise.then(() =>{
    console.log('So amazing!Work is finished!');
});

promise.catch(() =>{
    console.log('Oops!');
});

promise
    .then(() =>console.log('So amazing!Work is finished!'))
    .then(() =>console.log('Please try again!'));

promise
    .then(() =>console.log('So amazing!Work is finished!'))
    .then(() =>console.log('Please try again!'))
    .catch(() =>console.log('Oops!'));