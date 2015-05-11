// JavaScript Document

$(document).ready(function(){
	$('.nav_menu .dropdown').css('display','block');
	$('.nav_menu > ul').dropmenu({
		effect : 'slide',
		speed : 250,
		timeout : 0,
		nbsp : false
		});
		
		// Indicate items with sub-menu
	$('li').has('ul').find('> a').addClass('indicator');
	
	});
	


 