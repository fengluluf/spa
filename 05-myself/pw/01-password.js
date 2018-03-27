$(document).ready(function(){
	var $pwd = $('#main input[type="password"]');
	var $pwdText = $('#main input[type="text"]');
	var $eye1 = $('#img1');
	var $eye2 = $('#img2');

	$pwd.on('input',function(e){
		$pwdText.val($pwd.val());
	});
	$eye1.mouseout(function(){
		$pwdText.css('z-index',-10);
		$eye1.css('z-index',10);
		$eye2.css('z-index',-10);
	});
	$eye1.mouseover(function(){
		$pwdText.css('z-index',10);
		$eye1.css('z-index',-10);
		$eye2.css('z-index',10);
	});
})
