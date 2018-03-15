$(document).ready(function(){
	var $width = $("#rectangle__width");
	var $height = $("#rectangle__height");
	var $widthp = $("#widthp");
	var $heightp = $("#heightp");
	var p=false;
	//加载后获取焦点
	$width.focus();
	$("#rectangle__calc").click(function(){
		if(p){return;}
		var width = $width.val();
		var height = $height.val();		
		$("#rectangle__per").val(parseFloat((width*2+height*2).toFixed(10)));
		$("#rectangle__area").val(parseFloat((width*height).toFixed(10)));
	});
	$width.blur(function(){
	    p=proving1($width);
	});
	$height.blur(function(){
		p=proving2($height);
	});
	function proving1(e){
		var width = $width.val();
		var data = $(e);
		if(data.val()===''){
			$widthp.html("宽度不能为空");
			$width.focus();
			return;
		}
		if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val())) {
      		$widthp.html( '宽度必须是数值');
      		$width.focus();
      		return;
    	}
    	if(window.Number(data.val()) < 0) {
      		$widthp.html( '宽度必须大于零');
      		$width.focus();
      		return;
    	}
		$widthp.html('');
	}
	function proving2(e){
		var height = $height.val();
		var data = $(e);
		if(data.val()===''){
			$heightp.html("长度不能为空");
			$height.focus();
			return;
		}
		if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val())) {
      		$heightp.html( '长度必须是数值');
      		$height.focus();
      		return;
    	}
    	if(window.Number(data.val()) < 0) {
      		$heightp.html( '长度必须大于零');
      		$height.focus();
      		return;
    	}
		$heightp.html('');
	}
})