$(document).ready(function(){
	var $pro = $('#pro');
	var timer;
	var value = 0;
	$('#start').click(function(){
		timer = window.setInterval(function(){
			$pro.attr('value',value++)
		},50)
	});
	$('#end').click(function(){
		clearInterval(timer);
	});
	$('#reset').click(function(){
		$pro.attr('value',value=0);
	});
})