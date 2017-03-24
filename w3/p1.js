//push
var a = ['Amy','Tom','Cherry'];
console.log(a);

a.push('Edward');
console.log(a);

//slice
var b = a.slice(0,3);

console.log(a);
console.log(b);

//forEach
var color = ['Red','Purple','Blue'];
color.forEach(
    (color) => console.log(color)
);
// $(document).ready(function(){
//     color.forEach(
//         (color) => $('body').append(`<div>${color}</div>`)
//     );
// });

//map
var number = [1,2,3];
var newnumber;

console.log(number);
newnumber = number.map(
    (number) => number * 2
);
console.log(newnumber);

//spread operator
var array1 = [a,color];
var array2 = [...a,...color];

console.log(array1);
console.log(array2);

let state = {a:1,b:2,c:3};
console.log(state);
// state = {...state, d:4};
// console.log(state);
// state = {...state, a:10};
// console.log(state);
function adder (base, ...numbers) {
	numbers.forEach(function (number) {
		console.log(base + number);
	});
}

adder(3, 5, 7, 1);
//