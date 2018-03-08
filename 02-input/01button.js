$(document).ready(function(){
	var i=10;
	$("#btn").val('同意( '+i+' s)');
	$('#btn').attr('disabled',true);
	var timer=window.setInterval(function(){myTimer()},1000);
	function myTimer(){
		$("#btn").val('同意( '+--i+' s)');
		if(i==0){
			clearInterval(timer);
			$('#btn').val('同意');
			$('#btn').removeAttr('disabled');
		}
	}
})