$(document).ready(function(){
	var $width = $("#rectangle__width");
	var $height = $("#rectangle__height");
	var $widthp = $("#widthp");
	var $heightp = $("#heightp");
	//加载后获取焦点
	$width.focus();
	$("#rectangle__calc").click(function(){
		var width = $width.val();
		var height = $height.val();		
		$("#rectangle__per").val(parseFloat((width*2+height*2).toFixed(10)));
		$("#rectangle__area").val(parseFloat((width*height).toFixed(10)));
	});

	$width.blur(function(){
		proving1($width);
	});
	$height.blur(function(){
		proving2($height);
	});
	function proving1(e){
		var width = $width.val();
		var data = $(e);
		if(data.val()===''){
			$widthp.html("此处不能为空");
			return;
		}
		if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val())) {
      		$widthp.html( '必须是数值');
      		return;
    	}
    	if(window.Number(data.val()) < 0) {
      		$widthp.html( '必须大于零');
      		return;
    	}
		$widthp.html('');
	}
	function proving2(e){
		var height = $height.val();
		var data = $(e);
		if(data.val()===''){
			$heightp.html("此处不能为空");
			return;
		}
		if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val())) {
      		$heightp.html( '必须是数值');
      		return;
    	}
    	if(window.Number(data.val()) < 0) {
      		$heightp.html( '必须大于零');
      		return;
    	}
		$heightp.html('');
	}
})