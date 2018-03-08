$(document).ready(function(){
	$('#span').html($('#range').val());
	$('#range').change(function(){
		$('#span').html($('#range').val());
	})
})