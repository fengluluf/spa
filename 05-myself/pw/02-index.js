$(function(){
	var $btnAdd=$("#btn1");
	var $btnGet=$("#btn2");
	var pwdArray=[];

	$btnAdd.click(function(){
		$btnGet.removeAttr('disabled');
		var pwd = new PasswordBox({'container':'div.main'});
		pwdArray.push(pwd);
	});
	$btnGet.click(function(){
		pwdArray.forEach(function(pwd){
			alert(pwd.getPwd());
		})
	});
});