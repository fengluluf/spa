$(document).ready(function(){
	var $pro = $('#pro');
	var timer=0;
	var value = 0;
	$('#start').click(function(){
		if(timer!==0)return;
		timer = window.setInterval(function(){
			$pro.attr('value',value++)
		},50)
	});
	$('#end').click(function(){
		clearInterval(timer);
		timer = 0;
	});
	$('#reset').click(function(){
		$pro.attr('value',value=0);
	});
})