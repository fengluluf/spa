window.onload = function(){
	var width = document.getElementById("rectangle__width");
	width.focus();
	function click(){
		var width = document.getElementById("rectangle__width").value;
		var height = document.getElementById("rectangle__height").value;
		document.getElementById("rectangle__per").value= parseFloat((width*2+height*2).toFixed(10));
		document.getElementById("rectangle__area").value = parseFloat((width*height).toFixed(10));
	}
	document.getElementById("rectangle__calc").onclick=click;
	function per(){

	}
}