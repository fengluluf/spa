$(document).ready(function(){
	//$('#pass').focus();
	$('.icon').mouseover(function(){$('#pass').attr('type','text')});
	$('.icon').mouseout(function(){$('#pass').attr('type','password')});
})
