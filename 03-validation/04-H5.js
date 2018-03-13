$(document).ready(function(){
	var $width = $("#rectangle__width");
	var $height = $("#rectangle__height");
	var $widthp = $("#widthp");
	var $heightp = $("#heightp");
	//加载后获取焦点
	$width.focus();
	$(".rectangle form").submit(function(e){
		e.preventDefault();
		var width = $width.val();
		var height = $height.val();		
		$("#rectangle__per").val(parseFloat((width*2+height*2).toFixed(10)));
		$("#rectangle__area").val(parseFloat((width*height).toFixed(10)));
	});

})