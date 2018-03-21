//config为入口参数
var timerButton = function(config){
	$pass = $("<label>密码：</label><i class='icon'></i><input type='password' id='pass'>");
	$(config.container).append($pass);
	$('.icon').mouseover(function(){$('#pass').attr('type','text')});
	$('.icon').mouseout(function(){$('#pass').attr('type','password')});
	return timerButton;
}