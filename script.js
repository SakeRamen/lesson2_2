console.log("begin");

let d = {key: "value"};
let a = {key: "value"};
if(a==d){
	console.log("True");
}else{
	console.log("False");
}
a = d;
if(a==d){
	console.log("True");
}else{
	console.log("False");
}