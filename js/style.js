$(function(){
	'use strict';

// calculate body  padding

//$('body').css('paddingTop', $('.navbar')innerHeight()+20);


// scroll top

	$('.navbar-nav .nav-item .nav-link').click(function(e){
		e.preventDefault();

		$('html, body').animate({

          scrollTop: $('#'+ $(this).data('scroll')).offset().top+1

		},1000);

	});

// add active class

$('.navbar-nav .nav-item .nav-link').click(function(){
	$('.navbar-nav .nav-item .nav-link').removeClass('active');
	$(this).addClass('active');
});

////////////////////////////


// window scroll


$(window).scroll(function(){



	// sync navbar links
$('.block').each(function(){

if ($(window).scrollTop() > $(this).offset().top)

{

var blockID=$(this).attr('id');

$('.navbar-nav .nav-item .nav-link').removeClass('active');

$('.navbar-nav .nav-item .nav-link[data-scroll="'+blockID+'"] ').addClass('active');

 }

});

});
