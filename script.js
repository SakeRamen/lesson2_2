console.log('begin');

let arr = [1,2,3,4,5];

let b = arr.map(function(x) {
	return x*x
});

console.log(b);

b = arr.filter(function(x) {
	return x%2==0;
});

console.log(b);

let c = [] 
arr.forEach(function(x) {
	c.unshift(x);
});

console.log(c);

d = [-1,6,3,9,0,-5,-3,2];
console.log(d.reverse());
console.log(d.sort());


