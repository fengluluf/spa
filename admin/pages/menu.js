$(function(){
	var $menuBar = $('.menu-bar');
	var $lastMenuBar = null;
	var $menuItem = $('.item');
	$menuBar.click(function(e){
		var $menu = $(e.target).parents('li');
		var $items = $menu.find('.menu-items');
		var display = $items.css('display') === 'none' ? 'block' : 'none';

		if($lastMenuBar === null){
			$items.css('display',display);
		}else if($lastMenuBar.get(0) === $menu.get(0)){
			$items.css('display',display);
		}else{
			$lastMenuBar.find('.menu-items').css('display','none');
			$items.css('display',display);
		}	
		$lastMenuBar = $menu;	
	});
	$menuItem.click(function(e){
		var $item = $(e.currentTarget);
		location.hash = $item.find('p').attr('data-href');
	})
})