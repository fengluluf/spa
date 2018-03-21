$(function(){
	var $btn = $('.main input');
	var i = 9;
	var timer;

	disableBtn();

	$btn.click(function(){
		alert('');
	});

	function enableBtn(){
		$btn.val('同意');
		$btn.removeAttr('disabled');
	}

	function disableBtn(){
		$btn.attr('disabled','disabled').val('同意（'+i+"s)");
		timer = window.setInterval(function(){
			i--;
			if(i===0){
				enableBtn();
				window.clearInterval(timer);
				return;
			}
			$btn.val('同意（'+i+"s)");
		},1000);
	}
});
