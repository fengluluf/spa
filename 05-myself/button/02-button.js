//config为入口参数
var timerButton = function(config){
	var $btn = $('<input id="wd-timer-button" type="button">');
	var i = config.tlength;
	var timer;

	if(config.enable){
		enableBtn();
	}else{
		disableBtn();
	}

	$(config.container).append($btn);
	$btn.click(function(){
		$btn.trigger('timer-button-click');
	});

	function enableBtn(){
		$btn.val(config.title);
		$btn.removeAttr('disabled');
	}

	function disableBtn(){
		$btn.attr('disabled','disabled').val(config.title+'（'+i+"s)");
		timer = window.setInterval(function(){
			i--;
			if(i===0){
				enableBtn();
				window.clearInterval(timer);
				return;
			}
			$btn.val(config.title+'（'+i+"s)");
		},1000);
	}
	return timerButton;
}