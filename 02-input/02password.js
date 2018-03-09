$(document).ready(function(){
	//$('#pass').focus();
	$('#show').mouseover(function(){$('#pass').attr('type','text')});
	$('#show').mouseout(function(){$('#pass').attr('type','password')});
})