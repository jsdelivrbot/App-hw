function greet(callback){
    console.log('Hey guys!');
    var data = {
        name: 'Cherry'
    };
    callback(data);
}

greet(data =>{
    console.log('The callback was invoked!');
    console.log(data);
});

greet(data => {
    console.log('This is another callback!');
    console.log(data);
});