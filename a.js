var subtest=function(){
	var a=1;
	console.log(a);
	document.onscroll=function(){
	console.log(a);
	setTimeout(function(){
		a=2;
		console.log(a);}, 1000)
}
}
subtest();



