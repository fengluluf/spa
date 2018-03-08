window.onload = function(){
	var width = document.getElementById("rectangle__width");
	width.focus();
	function click(){
		var width = document.getElementById("rectangle__width").value;
		var height = document.getElementById("rectangle__height").value;
		document.getElementById("rectangle__per").value= width*2+height*2;
		document.getElementById("rectangle__area").value = width*height;
	}
	document.getElementById("rectangle__calc").onclick=click;
}