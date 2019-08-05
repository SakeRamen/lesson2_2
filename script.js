console.log('begin');

console.log('\" \n Hi');
let string = ' The quick brown fox quickly jupms over lazy dog. '
console.log(string[0]+ string[5]);
console.log(string.indexOf('fox'));
console.log(string.indexOf('o'));
console.log(string.lastIndexOf('o'));
console.log(string.replace('quick','slow'));
let splited = string.split(' ');
console.log(string.split(' '));
console.log(string.split('o'));
console.log(splited.join('-'));
console.log(string.substr(16,3));
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.trim());