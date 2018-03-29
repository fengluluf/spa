var $login=(function(){
	var html=''+'<div id="admin-app">'
	+'<div class="login">'
	+'<h1>集团后台登录</h1>'
	+'<form>'
	+'<label>用户名</label>'
	+'<input type="text" class="">'
	+'<br/>'
	+'<label>密　码</label>'
	+'<input type="password">'
	+'<br/>'
	+'<label>验证码</label>'
	+'<input type="text">'
	+'<br/>'
	+'<input type="submit" value="登录" id="sub">'
	+'</form>'
	+'</div>'
	+'</div>';
	function show(config){
		$(config.container).html(html);
	}
	return{show:show};
})();