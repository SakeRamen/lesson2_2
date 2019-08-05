console.log('begin');

let nums = new Set();
console.log(nums);
nums.add(42);
console.log(nums);
nums.add(43);
console.log(nums);
console.log(nums.size);
console.log(nums.has(3));
console.log(nums.has(43));
nums.delete(42);
console.log(nums);
for (let item of nums) {
	console.log('nums:'+ item);
}
nums.clear();
console.log(nums);
